# Guia Pratico de Estilos CSS e Modulos no React

Este documento consolida as melhores praticas para organizacao de estilos, uso de variaveis, implementacao de CSS Modules e dicas de layout. A estrutura detalhada a seguir garante que a estilizacao do projeto permaneca escalavel, facil de manter e livre de conflitos, algo essencial em arquiteturas baseadas em componentes, como aplicacoes desenvolvidas em Next.js e React.

---

## 1. Estrutura de Pastas e Estilos Globais

Para manter a organizacao do projeto, adote a padronizacao de centralizar as configuracoes visuais basicas em uma pasta dedicada.

* **Pasta Recomendada:** Crie um diretorio chamado `styles` na raiz do projeto ou dentro da pasta `src`.
* **global.css:** Arquivo destinado exclusivamente para os resets de CSS (como remover margins e paddings padroes do navegador) e estilos globais que afetam a aplicacao inteira (como fontes e cores de fundo do body).
* **theme.css:** Arquivo dedicado ao armazenamento de variaveis CSS globais, permitindo a criacao de um design system consistente e facilitando a implementacao de temas (como dark mode e light mode).

**Exemplo de declaracao no theme.css:**
```css
:root {
  --primary: #12345A;
  --background: #FFFFFF;
  --text-color: #333333;
}
```

---

## 2. CSS em Escopo (CSS Modules)

Para evitar conflitos de especificidade e classes vazando para outros elementos da aplicacao, utiliza-se o padrao de CSS Modules. Isso permite que cada componente tenha sua propria folha de estilos independente.

### 2.1. Nomenclatura e Criacao
Para que o empacotador reconheca o arquivo como um modulo, a nomenclatura deve obrigatoriamente terminar em `.module.css`. 
* **Exemplo de nome de arquivo:** `Heading.module.css`

### 2.2. Importacao e Aplicacao
Ao importar o arquivo no componente, voce deve atribuir um nome ao objeto que contera as classes. Embora qualquer nome possa ser usado (como `STYLES`, `estilos`, etc.), o padrao da comunidade e utilizar `styles`.

Em vez de passar uma string comum no `className`, voce acessara a propriedade correspondente no objeto importado.

**Exemplo Pratico:**
```jsx
// Importando o modulo e nomeando-o como 'styles'
import styles from './Heading.module.css';

export function Heading() {
  // A classe 'heading' definida no CSS e acessada via notacao de ponto
  return <h1 className={styles.heading}>Hello World Component Heading</h1>;
}
```

---

## 3. Multiplas Classes no Mesmo Elemento

Quando houver a necessidade de aplicar mais de uma estilizacao no mesmo elemento (por exemplo, uma classe estrutural e uma classe modificadora de cor), a concatenacao deve ser feita utilizando **Template Literals** (interpolacao de strings com crases e cifrao).

**Exemplo com Template Literals:**
```jsx
import styles from './Heading.module.css';

export function Heading() {
  return (
    <h1 className={`${styles.heading} ${styles.cyan}`}>
      Hello World Component Heading
    </h1>
  );
}
```

---

## 4. Dicas de Layout: O Padrao das 3 Divs

Para construir layouts responsivos e bem estruturados, uma abordagem altamente recomendada e dividir as sessoes da pagina em 3 containers principais. Essa estrategia facilita o alinhamento e o controle da largura em telas grandes (Glassmorphism e designs de paineis corporativos costumam se beneficiar muito dessa limitacao central).

1. **Container Fluid (Faixa Externa):** Uma `div` externa que estica por toda a largura da tela (100vw). Util para aplicar fundos coloridos, bordas ou imagens de background que vao de ponta a ponta.
2. **Container (Limitador Central):** Uma `div` interna responsavel por centralizar o conteudo e definir uma largura maxima, impedindo que os elementos fiquem esticados demais em monitores ultrawide.
3. **Content (Conteudo):** Onde os elementos reais (textos, cards, imagens) sao de fato inseridos.

**Exemplo de CSS para o Container Limitador:**
```css
.container {
  max-width: 98rem;
  background: blue; /* Apenas para visualizacao */
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 0 1rem; /* Margem interna de seguranca para mobile */
}
```

---

## 5. Casos Especiais de Nomenclatura no JSX

### 5.1. Classes com Traco (Kebab-case)
No CSS tradicional, e comum usar palavras separadas por traco (ex: `logo-link`). No entanto, no JavaScript, o traco e interpretado como um sinal de subtracao, o que impede o uso da notacao de ponto (`styles.logo-link` causaria um erro). 

Para resolver isso, utiliza-se a notacao de colchetes:
```jsx
className={styles['logo-link']}
```

### 5.2. Classes em CamelCase
Para evitar o uso de colchetes, a recomendacao principal ao trabalhar com CSS Modules e escrever as classes em **camelCase** direto no arquivo CSS.

```jsx
className={styles.logoLink}
```

---

## 6. Estilizacao de Icones (Lucide)

Ao utilizar bibliotecas de icones em SVG, como a Lucide, a forma correta de aplicar estilos CSS globais ou locais ao icone e selecionar a classe da tag pai e referenciar o elemento `svg` diretamente.

**Exemplo no CSS:**
```css
/* Seleciona o SVG renderizado dentro do container especificado */
.icon-container svg {
  width: 24px;
  height: 24px;
  stroke: var(--primary);
  transition: stroke 0.2s ease-in-out;
}

.icon-container:hover svg {
  stroke: #000000;
}
```