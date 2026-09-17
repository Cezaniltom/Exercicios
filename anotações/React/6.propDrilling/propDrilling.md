O **Prop Drilling** (Perfuração de Propriedades) é a mecânica nativa e estrutural do React para transitar informações pela sua aplicação. Ele consiste em repassar variáveis de um componente superior (Pai) para os componentes inferiores (Filho, Neto, Bisneto) através de **Props** (propriedades injetadas nas tags dos componentes).

A regra fundamental e imutável do React é: **a informação só desce** pela árvore de componentes.

## 1. A Exigência do TypeScript
No TypeScript, todo componente que recebe uma propriedade na sua porta de entrada é **obrigado** a declarar uma `interface` (ou `type`) avisando exatamente qual o formato daquele dado. 

Se uma variável precisar descer 4 níveis de profundidade, você será obrigado a tipar essa propriedade 4 vezes, mesmo que os componentes intermediários funcionem apenas como "carteiros" (recebendo a variável apenas para repassá-la ao próximo nível).

## 2. A Solução: O Uso de Models (Contratos)
Para evitar escrever as mesmas propriedades manualmente em cada nível (ex: `nome`, `telefone`, `status`), o mercado adota a criação de **Models**. 

Um Model é um arquivo separado que dita a "fonte única de verdade" de como uma entidade deve ser no sistema inteiro. O dado viaja de mão em mão, mas todos os componentes consultam esse mesmo arquivo para tipar a informação com segurança.

```typescript
// Arquivo: src/models/LeadModel.ts
export interface LeadModel {
    id: string;
    nome: string;
    telefone: string;
    status: 'novo' | 'em_atendimento';
}
```

## 3. Tipos de Componentes na Árvore
Durante a descida da informação, o dado passa por dois tipos de componentes:

* **Componentes Intermediários (Containers / Carteiros):** Eles recebem os dados e montam o layout estrutural (divs, sections, grids). Eles não finalizam a ação; o trabalho deles é repassar a propriedade adiante chamando o próximo componente customizado.
* **Componentes Folha (Fim da Linha / Leaves):** São o destino final. Eles recebem a propriedade, utilizam a informação de fato na tela, e retornam apenas elementos HTML nativos (`<button>`, `<span>`, `<a>`), encerrando a árvore de renderização daquele bloco.

## 4. Exemplo Prático: A Corrida de Revezamento (Passo a Passo)
Abaixo, o fluxo completo de um dado nascendo no Pai e atravessando a aplicação até chegar no Bisneto, respeitando estritamente o TypeScript em cada etapa.

```tsx
// ==========================================
// NÍVEL 1: O PAI (A Origem do Dado)
// ==========================================
import { LeadModel } from '../models/LeadModel';
import { Lista } from './Lista';

export function Dashboard() {
    // O dado nasce aqui e obedece ao contrato do LeadModel
    const leadAtual: LeadModel = { 
        id: "1", 
        nome: "João", 
        telefone: "85999999999", 
        status: "novo" 
    }; 
  
    // O Pai injeta a variável transformando-a em uma Prop para descer
    return <Lista dadosDoLead={leadAtual} /> 
}


// ==========================================
// NÍVEL 2: O FILHO (Componente Intermediário)
// ==========================================
import { LeadModel } from '../models/LeadModel';
import { Card } from './Card';

// A interface da porta de entrada exige o Model
interface ListaProps {
    dadosDoLead: LeadModel;
}

export function Lista({ dadosDoLead }: ListaProps) {
    // A Lista atua como carteiro: apenas recebe e repassa a prop para o Card
    return <Card dadosDoLead={dadosDoLead} />
}


// ==========================================
// NÍVEL 3: O NETO (Componente Intermediário)
// ==========================================
import { LeadModel } from '../models/LeadModel';
import { BotaoWhatsApp } from './BotaoWhatsApp';

// A interface precisa ser declarada novamente (O peso do Prop Drilling)
interface CardProps {
    dadosDoLead: LeadModel;
}

export function Card({ dadosDoLead }: CardProps) {
    return (
        <div className="card">
            <p>{dadosDoLead.nome}</p>
            {/* O Card desmembra o objeto e repassa apenas o telefone para o botão */}
            <BotaoWhatsApp telefone={dadosDoLead.telefone} />
        </div>
    )
}


// ==========================================
// NÍVEL 4: O BISNETO (Componente Folha / Destino)
// ==========================================
// O Botão exige apenas uma string, pois o Card já filtrou a informação
interface BotaoWhatsAppProps {
    telefone: string;
}

export function BotaoWhatsApp({ telefone }: BotaoWhatsAppProps) {
    // FIM DA LINHA: O componente utiliza o dado final e retorna uma tag HTML nativa.
    return (
        <button onClick={() => alert(`Abrindo WhatsApp para: ${telefone}`)}>
            Chamar no Whats
        </button>
    )
}
```

## 5. Boas Práticas (A Regra dos 2 Níveis)
O Prop Drilling é a forma mais rápida, explícita e performática de trafegar dados no React, porém, o mercado impõe um limite claro de arquitetura: A Regra dos 2 Níveis.

* **Distâncias curtas (Pai para Filho ou Pai para Neto):** Utilize o Prop Drilling. É simples, não exige bibliotecas externas e o rastreio da informação é fácil.
* **Distâncias longas (3, 4 ou mais níveis de profundidade):** O excesso de repetição de interfaces nos componentes intermediários polui drasticamente o código. Nesses cenários, abandona-se o Prop Drilling em favor de um Estado Global (Context API ou Zustand), permitindo que o componente folha consuma o dado diretamente da nuvem, eliminando a função de "carteiro" do meio do caminho.