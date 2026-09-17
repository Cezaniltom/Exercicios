# O Provider e a Customização de Hooks (Custom Hooks) no React

Este documento detalha o funcionamento do `Provider` dentro da Context API e introduz o conceito avançado de Custom Hooks, demonstrando como essas duas ferramentas se complementam para criar uma arquitetura limpa e escalável.

---

## 1. O que é o Provider?

O `Provider` (Provedor) é literalmente o componente responsável por "ligar o roteador Wi-Fi" do seu Contexto. É ele quem abraça a sua aplicação e distribui os dados armazenados para todos os componentes filhos, netos e bisnetos que estão dentro dele. Sem o Provider, o `useContext` não tem de onde puxar a informação.

### 1.1. Quando utilizar?
Você deve criar e utilizar um Provider apenas quando a informação for global e estritamente necessária em múltiplas áreas distantes do seu sistema. Evite usar para estados simples de uma tela só.

*   **Temas Visuais:** Para distribuir preferências de modo Dark ou Light (ou detalhes estéticos corporativos, como painéis com fundos em Glassmorphism) por todo o dashboard.
*   **Autenticação:** Para guardar o nome, permissões e token do usuário logado e acessá-los do cabeçalho ao rodapé.
*   **Notificações Globais:** Para permitir que qualquer botão no sistema dispare um alerta de sucesso ou erro na tela principal.
*   **Carrinho e Métricas:** Para rastrear ações que somam valores (como produtos ou painéis de dados financeiros) independentemente de qual página o usuário esteja.

### 1.2. Onde posicionar o Provider?
A regra de ouro é colocá-lo o **mais alto possível** na sua árvore de componentes. Normalmente, ele envolve toda a sua aplicação no arquivo base estrutural (como o `App.tsx`, `main.tsx` ou arquivos de layout global). Se ele não "abraçar" um componente, esse componente ficará fora do alcance do sinal do contexto e não conseguirá ler os dados.

---

## 2. Padrão de Mercado: Implementando o Provider

Este é o padrão de mercado de como criar o contexto, montar o Provider usando a propriedade `children` e consumi-lo em outro componente.

**Criando o Contexto e o Provider (ThemeContext.tsx):**
```typescript
import { createContext, useState, ReactNode } from 'react';

// 1. CRIANDO O CONTEXTO (A Nuvem)
// Definimos o formato dos dados vazios apenas para o TypeScript saber o que esperar
export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {}
});

// 2. CRIANDO O PROVIDER (A Antena Transmissora)
// Ele usa a prop "children" para abraçar e renderizar os outros componentes
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }

    return (
        // O "value" é a carga de dados que está sendo enviada pelo Wi-Fi
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
```

**Posicionando o Provider na raiz (App.tsx):**
```typescript
import { ThemeProvider } from './ThemeContext';
import { Menu } from './Menu';
import { Dashboard } from './Dashboard';

export function App() {
    return (
        // O Provider abraça o sistema. Tudo aqui dentro tem acesso ao tema!
        <ThemeProvider>
            <Menu />
            <Dashboard />
        </ThemeProvider>
    );
}
```

**Consumindo a informação de forma nativa (Menu.tsx):**
```typescript
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function Menu() {
    // Puxa a variável e a função direto da nuvem, sem receber via Props!
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Alterar Tema. O atual é: {theme}
        </button>
    );
}
```

---

## 3. Customização de Hooks (Custom Hooks)

A customização de Hooks é a prática de extrair a lógica de estado ou de ciclo de vida (como `useState`, `useEffect` e `useContext`) de dentro dos seus componentes visuais e encapsulá-la em funções reutilizáveis próprias. 

Todo Custom Hook deve obrigatoriamente começar com a palavra `use` (ex: `useTheme`, `useAuth`, `useFetch`).

### 3.1. Por que criar Custom Hooks?
*   **Reaproveitamento de Código:** Se você precisa buscar dados de uma API em várias áreas do sistema para automatizar processos, em vez de repetir a configuração do `useEffect` em cada tela, você cria um hook customizado.
*   **Código Limpo:** O componente passa a se preocupar apenas em mostrar a interface (JSX). Toda a engenharia complexa fica escondida dentro do Hook.
*   **Proteção do Contexto:** A principal utilidade de um Custom Hook ao trabalhar com a Context API é encapsular o `useContext` e garantir, através de validações, que a informação não seja acessada fora das fronteiras do `Provider`.

### 3.2. Exemplo Prático: Unindo Context API com Custom Hooks
Ao invés de obrigar a importação dupla (`useContext` e `ThemeContext`) em toda tela que precisar da cor do sistema, nós criamos um hook personalizado para abstrair isso.

**No mesmo arquivo `ThemeContext.tsx`, adicionamos no final:**
```typescript
// Importação necessária caso não esteja no topo do arquivo
import { useContext } from 'react'; 

// Criando o Custom Hook
export function useTheme() {
    const context = useContext(ThemeContext);

    // Tratamento de erro crucial: verifica se o componente está tentando
    // acessar o Wi-Fi estando fora da área de cobertura do Provider
    if (context === undefined) {
        throw new Error('useTheme deve ser usado estritamente dentro de um ThemeProvider');
    }

    return context;
}
```

**Como o consumo no `Menu.tsx` fica mais limpo e seguro com o Custom Hook:**
```typescript
import { useTheme } from './ThemeContext'; // Importa apenas o Custom Hook

export function Menu() {
    // Acesso direto, encapsulado e protegido contra erros arquiteturais!
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Alterar Tema. O atual é: {theme}
        </button>
    );
}
```