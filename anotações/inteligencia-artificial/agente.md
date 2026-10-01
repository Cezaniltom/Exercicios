1. Definição da Ferramenta (Tool) com ZodO segredo para o agente não quebrar seu banco de dados é a tipagem estrita. O LLM não escreve SQL; ele preenche um JSON que o Zod valida antes de acionar seu ORM.TypeScriptimport { tool } from "@langchain/core/tools";
import { z } from "zod";
import { PrismaClient } from "@prisma/client"; // Ou Drizzle ORM

const prisma = new PrismaClient();

// 1. Criamos a ferramenta que altera o banco
export const updateUserStatusTool = tool(
  async ({ userId, newStatus }) => {
    try {
      // O código Node.js real que executa no banco
      const user = await prisma.users.update({
        where: { id: userId },
        data: { status: newStatus },
      });
      
      // O retorno em string é a "Observação" que o LLM vai ler
      return `Sucesso: O usuário ${user.name} (ID: ${userId}) foi alterado para o status '${newStatus}'.`;
    } catch (error) {
      return `Erro ao atualizar o banco de dados: ${error.message}`;
    }
  },
  {
    name: "update_user_status",
    description: "Use esta ferramenta APENAS para atualizar o status de assinatura ou pagamento de um usuário no banco de dados.",
    schema: z.object({
      userId: z.number().describe("O ID numérico único do usuário no sistema."),
      newStatus: z.enum(["active", "canceled", "suspended"])
        .describe("O novo status que deve ser aplicado ao usuário."),
    }),
  }
);
2. Configuração do Agente (LangGraph)A abordagem recomendada atualmente pelo LangChain para construir agentes é o LangGraph, que permite criar um loop cíclico onde o agente pensa, chama a ferramenta, lê a resposta do banco e gera a resposta final.TypeScriptimport { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { MemorySaver } from "@langchain/langgraph";

// 2. Inicializa o LLM (precisa ser um modelo que suporte Function Calling)
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0, 
});

// 3. Array com todas as ferramentas disponíveis para o agente
const tools = [updateUserStatusTool];

// 4. Memória de curto prazo para a sessão atual
const memory = new MemorySaver();

// 5. Criação do loop do Agente ReAct
const agent = createReactAgent({
  llm,
  tools,
  checkpointSaver: memory,
});
3. Invocação e ExecuçãoQuando você envia o comando, o agente analisa a intenção, extrai os parâmetros (como o ID e o status), preenche o schema do Zod e dispara a execução no seu banco.TypeScriptasync function runAgent() {
  const config = { configurable: { thread_id: "sessao_usuario_1" } };

  console.log("Usuário: Cancele a assinatura do usuário ID 405 imediatamente.\n");

  const stream = await agent.stream(
    {
      messages: [
        {
          role: "user",
          content: "Cancele a assinatura do usuário ID 405 imediatamente.",
        },
      ],
    },
    config
  );

  // Consumindo os passos do agente para ver o que ele está fazendo
  for await (const chunk of stream) {
    if (chunk.agent?.messages) {
      console.log("🤖 Agente pensando...");
    } else if (chunk.tools?.messages) {
      console.log("🛠️  Executando ferramenta no banco de dados...");
      // Aqui ele mostra o retorno da query do Prisma
      console.log("📦 Retorno:", chunk.tools.messages[0].content);
    }
  }

  // Pegando a resposta final do LLM
  const state = await agent.getState(config);
  const finalMessage = state.values.messages[state.values.messages.length - 1];
  
  console.log("\nResposta Final da IA:", finalMessage.content);
}

runAgent();
Por que essa estrutura é segura?Isolamento de Responsabilidade: O LLM não sabe qual banco você usa (Postgres, MySQL, MongoDB). Ele apenas interage com a interface do Zod.Auto-Correção: Se você reparar no catch da ferramenta, nós retornamos o erro como uma string para o LLM. Se o LLM tentar enviar um ID que não existe, o banco retorna um erro, o LLM lê esse erro, entende a falha e pode pedir desculpas ao usuário ou tentar outra abordagem de forma autônoma.