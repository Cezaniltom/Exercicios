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