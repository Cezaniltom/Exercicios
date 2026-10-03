O fluxo de um webhook acontece em 4 etapas técnicas:

A Configuração (Registro da URL): A sua aplicação (como o seu backend em NestJS ou um fluxo no n8n) cria uma URL pública projetada para receber dados (ex: [https://sua-api.com/webhook/pagamentos](https://sua-api.com/webhook/pagamentos)). Você cadastra essa URL no sistema de terceiros (ex: Stripe, GitHub, Typebot).

A Ocorrência do Evento: Algo acontece no sistema de terceiros. Por exemplo, um cliente tem o cartão de crédito aprovado no Stripe.

O Disparo (Push): Imediatamente após o evento, o sistema de terceiros faz uma requisição HTTP POST para a URL que você cadastrou, enviando o payload (geralmente um JSON) com todos os detalhes da transação.

O Recebimento (Acknowledgement): Seu sistema recebe o JSON, processa a lógica de negócio (como atualizar o banco de dados via Prisma) e precisa responder rapidamente com um HTTP Status 200 OK para avisar ao sistema de origem que a mensagem foi entregue com sucesso.

O Webhook no seu ecossistema
Como você utiliza automação e desenvolvimento full stack, webhooks estão no centro de quase tudo o que você integra:

No n8n: Quando você usa o nó de Webhook Trigger, o n8n simplesmente cria uma URL temporária (ou de produção) e fica "escutando". Quando o Typebot ou o WooCommerce manda um POST para lá, a sua automação inicia na hora.

No backend (NestJS/Express): Você cria rotas normais (@Post('webhook')), mas a diferença é que o "usuário" que acessa essa rota não é o frontend (React), e sim os servidores de outra empresa.

Segurança: Como a URL do webhook é pública, qualquer um poderia mandar um POST falso fingindo ser o Stripe. Por isso, webhooks profissionais sempre enviam um Header com uma assinatura criptografada (HMAC) para que você valide se o request realmente veio da fonte original antes de alterar seu banco de dados.