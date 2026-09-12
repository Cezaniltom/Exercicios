# Hook useContext

A definição exata do `useContext` é: Ele serve para distribuir o estado de um componente global para qualquer componente da aplicação (netos, bisnetos, tataranetos), sem precisar passar essa informação de mão em mão por cada nível intermediário.

## O Problema que o useContext resolve: Prop Drilling

Para entender o Contexto, você precisa conhecer o vilão que ele combate: o **Prop Drilling** (Perfuração de Props).

Imagine que você tem uma tela no seu sistema estruturada da seguinte forma:
`App` -> `Dashboard` -> `PainelLateral` -> `CartaoDoUsuario` -> `Avatar`

Se você guardou o estado com o nome do usuário lá no `App` e precisa exibir a foto dele lá no componente `Avatar`, usando Props você teria que passar o dado por todos os componentes no meio do caminho, mesmo que o `Dashboard` e o `PainelLateral` não precisem dessa informação. Eles atuariam apenas como "carteiros". Isso polui o código consideravelmente e adiciona uma complexidade desnecessária à manutenção.

## A Solução (Como o useContext age)

O Contexto cria uma espécie de "nuvem" ou "alto-falante" em volta da sua aplicação (chamado de **Provider**).

Se você colocar o estado do "Tema" (Dark/Light) ou as informações do "Usuário Logado" dentro dessa nuvem, qualquer componente, não importa quão fundo ele esteja na árvore de componentes, pode simplesmente "plugar" na nuvem usando o hook `useContext` e pegar o dado diretamente. Os componentes intermediários não tomam conhecimento dessa transação.

## Analogia Prática: O Prédio Corporativo

Para consolidar o entendimento da arquitetura, a melhor analogia é a dinâmica de um prédio corporativo:

*   **Usando Props:** O Diretor (Componente Pai) escreve um recado e entrega para o Gerente (Filho), que entrega para o Coordenador (Neto), que finalmente entrega para o Estagiário (Bisneto). Uma cadeia de comunicação dependente de várias etapas.
*   **Usando useContext:** O Diretor (Componente Pai) prega o recado no Mural do Saguão (Provider). O Estagiário (Bisneto) simplesmente vai até o mural e lê o recado sozinho, sem incomodar o Gerente e o Coordenador com informações que não competem a eles.

## Quando usar o useContext?

Ele é ideal e recomendado para dados classificados como "globais", tais como:

*   **Temas Visuais:** O tema Dark/Light (como o que estava sendo feito no componente de Menu). O sistema inteiro precisa ter ciência da paleta de cores atual para estilizar os elementos corretamente.
*   **Autenticação:** O status da sessão (saber se o usuário está logado), qual é o nome de exibição e os dados do avatar.
*   **Carrinho de Compras ou Notificações:** Várias partes de uma plataforma precisam acessar e exibir métricas ativas, como a quantidade de itens que o usuário já colocou no carrinho, independentemente da rota em que o usuário se encontra.

## O que é prop drilling?

*É o conceito de transferencia do estado de um componente pai para um componente filho

<!-- # Hook useContext: Entendendo Prop Drilling e Estado Global

É absolutamente normal encontrar barreiras ao aprender o `useContext`. Este hook atua como o grande divisor de águas entre o desenvolvimento React básico e o avançado. O conceito de *Prop Drilling*, o problema que ele resolve, só faz sentido quando o desenvolvedor sente a "dor" dessa prática na manutenção de um projeto real e escalável.

Para consolidar o entendimento de forma definitiva, vamos deixar o código de lado por um momento e analisar esse conceito através de uma analogia baseada no mundo real.

---

## O Pesadelo do Prop Drilling (A Corrida de Revezamento)

Imagine que você está no 5º andar de um prédio corporativo e fez o pedido de uma pizza. O entregador (que representa o React) chega na portaria (o Componente Pai). As regras de segurança do prédio ditam que o entregador não pode subir direto pelo elevador. Ele é obrigado a entregar a pizza para o porteiro (Filho), que sobe de escada e entrega para o zelador no 1º andar (Neto), que por sua vez entrega para o segurança no 3º andar (Bisneto), até que a pizza finalmente chegue em você no 5º andar.

Isso é o **Prop Drilling** (em tradução livre, "perfuração de propriedades"). Você está passando uma propriedade (a pizza) através de vários componentes no meio do caminho que não têm interesse nenhum em consumir a informação, servindo apenas como pontes para que ela chegue ao destino final. No código, à medida que o sistema cresce, essa cadeia de repasse se torna um gargalo imenso para a manutenção e legibilidade.

---

## O Salvador useContext (O Teletransporte / Roteador Wi-Fi)

Agora, imagine um cenário otimizado: em vez de passar a pizza de mão em mão, a administração do prédio instala um portal de teletransporte no saguão principal (O **Provider**). 

Qualquer pessoa no prédio, em qualquer andar, que tiver a senha de acesso a esse portal (O **useContext**) pode simplesmente abrir uma porta direta e pegar a sua própria fatia, sem precisar incomodar o porteiro, o zelador ou o segurança. Você disponibilizou a informação de forma "global" no escopo daquele prédio.

---

## Comparativo na Prática (Código)

### 1. O Problema no Código (Prop Drilling)
Veja como o Prop Drilling polui a estrutura do seu sistema quando você precisa passar o nome do usuário logado do arquivo principal da aplicação até o último nível de um menu lateral:

```tsx
// O App não usa o nome para nada, apenas o recebe e repassa adiante
function App({ nomeUsuario }) {
  return <Dashboard nomeUsuario={nomeUsuario} />
}

// O Dashboard também não utiliza o dado, atuando exclusivamente como "carteiro"
function Dashboard({ nomeUsuario }) {
  return <MenuLateral nomeUsuario={nomeUsuario} />
}

// Somente o MenuLateral, no fim da cadeia, realmente precisa e usa a informação!
function MenuLateral({ nomeUsuario }) {
  return <span>Bem-vindo, {nomeUsuario}</span>
}
```

### 2. A Solução Limpa e Escalável (useContext)
Com a implementação do Contexto, criamos um "Roteador Wi-Fi" de informações e embrulhamos nossa aplicação dentro do alcance desse sinal. Os componentes intermediários são libertados da função de repasse.

```tsx
import { useContext } from 'react';
// Supondo que o UsuarioContext foi criado previamente em outro arquivo

// 1. O MenuLateral se conecta no "Wi-Fi" sozinho e consome a informação direto da fonte
function MenuLateral() {
  const { nomeUsuario } = useContext(UsuarioContext);
  
  return <span>Bem-vindo, {nomeUsuario}</span>
}

// 2. O Dashboard fica completamente limpo, focado em sua responsabilidade sem receber Props inúteis
function Dashboard() {
  return <MenuLateral />
}

// 3. O App transmite o sinal do "Wi-Fi" (Provider) para todos os filhos, netos e bisnetos
function App() {
  return (
    <UsuarioContext.Provider value={{ nomeUsuario: "Francisco" }}>
      <Dashboard />
    </UsuarioContext.Provider>
  )
}
```

---

## A Regra Arquitetural Definitiva

Para decidir quando utilizar cada abordagem, siga esta regra simples:
*   **Use Props:** Para passar dados e funções diretamente para o seu vizinho de porta (componente imediatamente filho) que depende estritamente daquela informação para funcionar.
*   **Use useContext:** Para dados globais que precisam estar disponíveis para o sistema inteiro consultar a qualquer momento, sem restrição de hierarquia (como informações da sessão do usuário logado, permissões de acesso ou preferências de tema visual, como Dark/Light Mode). -->