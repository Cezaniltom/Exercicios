implementar o RAG usando pgvector e acoplá-lo ao LangGraph.

1. Configurando o PGVector no LangChain
Primeiro, garanta que a extensão vetorial está ativa no seu PostgreSQL (CREATE EXTENSION IF NOT EXISTS vector;).

Você precisará de um modelo de embeddings (para transformar texto em vetores) e da integração oficial do LangChain para o Postgres.

Bash
npm install @langchain/community pg
TypeScript
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PoolConfig } from "pg";

// Configuração da conexão com o banco de dados onde o pgvector está rodando
const dbConfig: PoolConfig = {
  host: "localhost",
  port: 5432,
  user: "n8n_user",
  password: "n8n_password_change_me",
  database: "n8n_database",
};

// Inicializa o Vector Store com o modelo de embeddings
const vectorStore = await PGVectorStore.initialize(
  new OpenAIEmbeddings({ model: "text-embedding-3-small" }),
  {
    postgresConnectionOptions: dbConfig,
    tableName: "business_rules_embeddings",
  }
);
2. Criando a Ferramenta de RAG
Agora, criamos uma ferramenta estritamente tipada com Zod, cujo único trabalho é receber a dúvida do LLM, buscar no pgvector e devolver os textos relevantes (contexto).

TypeScript
import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const searchBusinessRulesTool = tool(
  async ({ query }) => {
    try {
      // Faz a busca semântica no pgvector pegando os 3 resultados mais relevantes
      const results = await vectorStore.similaritySearch(query, 3);
      
      if (results.length === 0) {
        return "Nenhuma regra de negócio encontrada para essa consulta.";
      }

      // Retorna o conteúdo dos documentos como uma string para o agente ler
      return results.map((doc, index) => `[Documento ${index + 1}]: ${doc.pageContent}`).join("\n\n");
    } catch (error) {
      return `Erro ao buscar no banco de dados vetorial: ${error.message}`;
    }
  },
  {
    name: "consultar_regras_negocio",
    description: "Sempre use esta ferramenta ANTES de tomar decisões críticas ou alterar o banco de dados. Use para buscar políticas, regras de negócio ou limites financeiros da aplicação.",
    schema: z.object({
      query: z.string().describe("A pergunta ou conceito que deseja pesquisar nas políticas da empresa."),
    }),
  }
);
3. Ajustando o System Prompt do Agente
Para garantir que o agente utilize o RAG antes de agir, você precisa amarrar esse comportamento no System Prompt. O LangGraph permite injetar instruções claras de como ele deve se comportar.

TypeScript
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { SystemMessage } from "@langchain/core/messages";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

// Adicionamos a ferramenta de RAG junto com a ferramenta de Update do banco (Prisma/Drizzle)
const tools = [searchBusinessRulesTool, updateUserStatusTool];

const systemPrompt = new SystemMessage(`Você é um assistente autônomo de gestão de usuários.
REGRA CRÍTICA: Você NUNCA deve alterar o status de um usuário usando a ferramenta 'update_user_status' sem antes consultar as políticas da empresa usando a ferramenta 'consultar_regras_negocio'.
Se a política impedir a alteração solicitada pelo usuário, explique o motivo e não altere o banco de dados.`);

const agent = createReactAgent({
  llm,
  tools,
  messageModifier: systemPrompt, // Instruções do sistema
});