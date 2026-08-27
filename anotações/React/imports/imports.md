# React & JavaScript: Guia de Imports, Exports e Regras JSX

Este documento serve como um guia rápido e prático sobre as diferentes formas de trabalhar com módulos (Imports/Exports) no JavaScript aplicados ao ecossistema React, além de regras fundamentais para a escrita de código JSX.

---

## 1. Tipos de Exportação e Importação

### 1.1. Default Export (Exportação Padrão)
**Quando usar:** Ideal para quando o arquivo tem uma **única responsabilidade** principal (ex: um componente React principal) ou quando se deseja exportar uma classe grande.
* **Regra:** Só pode existir **um** `export default` por arquivo.
* **Importação:** **NÃO** utiliza chaves `{}`. Você pode atribuir o nome que desejar ao componente/função no momento da importação.

**Exemplo de Exportação:**
```javascript
// arquivo: MeuComponente.js
export default function MeuComponente() {
  console.log('Componente Principal');
}
```

**Exemplo de Importação:**
```javascript
// O nome "QualquerNome" fará referência à função "MeuComponente"
import QualquerNome from './MeuComponente';
```

---

### 1.2. Named Export (Exportação Direta da Função)
**Quando usar:** Utilizado quando o arquivo possui **várias funções ou constantes independentes**. É o padrão ideal para arquivos utilitários (ex: `utils.js`, `helpers.js`, `hooks.js`).
* **Regra:** O nome da importação **deve ser exatamente o mesmo** nome da função exportada.
* **Importação:** **OBRIGATÓRIO** o uso de chaves `{}`.

**Exemplo de Exportação:**
```javascript
// arquivo: utils.js
export function calcularTotal() {
  console.log('Total calculado');
}
```

**Exemplo de Importação:**
```javascript
import { calcularTotal } from './utils';
```

---

### 1.3. Exportação Nomeada no Final do Arquivo
**Quando usar:** Segue o mesmo princípio do *Named Export*, mas separa a declaração das funções da sua exportação. É uma excelente prática para manter o código organizado, agrupando todas as exportações em uma única declaração ao final do arquivo.

**Exemplo de Exportação:**
```javascript
// arquivo: operacoes.js
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

// Exporta tudo de uma vez
export { somar, subtrair };
```

**Exemplo de Importação:**
```javascript
// Importa somente o que for necessário
import { somar } from './operacoes';
```

---

### 1.4. Tratamento de Conflitos (Uso de Apelidos / *Aliases*)
Se houver conflito de nomes entre a função que está importando e uma variável já existente no arquivo, é possível dar um "apelido" utilizando a palavra-chave `as`.

**Exemplo de Importação com Alias:**
```javascript
import { somar as somarPrincipal } from './operacoes';

// Agora a função será chamada por somarPrincipal()
```

---

### 1.5. Importação em Massa (*Wildcard Import*)
Quando precisa importar **todas** as funções de um arquivo utilitário de uma só vez, podemos empacotá-las em um único objeto usando `* as`.

**Exemplo de Importação em Massa:**
```javascript
import * as operacoesMatematicas from './operacoes';

// Uso:
// operacoesMatematicas.somar(1, 2)
// operacoesMatematicas.subtrair(5, 3)
```

---

## 2. Regras Essenciais de JSX no React

A sintaxe JSX permite escrever código semelhante a HTML dentro do JavaScript, mas possui regras estritas de compilação.

### 2.1. O Retorno com Múltiplas Linhas
Sempre que o `return` de um componente possuir mais de uma linha de marcação, o ideal (e muitas vezes obrigatório para evitar erros do *Automatic Semicolon Insertion* do JS) é **envolver todo o conteúdo em parênteses `()`**.

**Exemplo:**
```jsx
export default function MeuComponente() {
  return (
    <div>
      <p>Lorem ipsum 1</p>
      <p>Lorem ipsum 2</p> 
    </div>
  );
}
```

### 2.2. A Regra do Elemento Pai Único e o React Fragment
O JSX só permite que um componente retorne **UM único elemento pai** contendo todos os elementos filhos. 

Se não deseja adicionar uma `<div>` extra no DOM (o que pode sujar a semântica do HTML e afetar o SEO ou layouts baseados em Grid/Flexbox), a melhor prática é utilizar o **React Fragment**. Ele engloba os filhos sem renderizar um nó HTML extra na página.

**A sintaxe do Fragment é `<> ... </>`:**

**Exemplo com Fragment:**
```jsx
export default function EstruturaOtimizada() {
  return (
    <>
      <h1>Título da Página</h1>
      <p>Este parágrafo e o h1 estão agrupados pelo Fragment.</p>
      <p>Nenhuma div desnecessária será renderizada no DOM.</p>
    </>
  );
}
```