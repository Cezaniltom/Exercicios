A **Context API** é a ferramenta nativa do React construída para resolver o problema de compartilhamento de **estado global**. Enquanto as Props (Prop Drilling) exigem que a informação seja passada de mão em mão de cima para baixo, o Contexto funciona como uma "Nuvem" ou um "Roteador Wi-Fi". 

Você deposita a informação na nuvem no topo do seu sistema, e qualquer componente, em qualquer nível de profundidade, pode se conectar a essa rede e extrair os dados instantaneamente, ignorando todos os componentes no meio do caminho.

## 1. Quando utilizar (E quando NÃO utilizar)

O Contexto é poderoso, mas tem um custo: toda vez que o valor na nuvem é alterado, **absolutamente todos os componentes conectados a ela são re-renderizados**. 

**Casos ideais para useContext:**
* **Autenticação (Auth):** Guardar o token JWT, nome, avatar e nível de acesso do usuário logado no seu Micro-SaaS.
* **Temas Visuais:** Distribuir a escolha do usuário entre tema Dark, Light ou Glassmorphism para toda a interface.
* **Internacionalização (i18n):** Guardar o idioma selecionado do sistema.
* **Notificações Globais (Toasts):** Permitir que qualquer tela dispare um alerta flutuante (ex: "Lead recebido com sucesso").

**Quando NÃO usar (Use Props em vez disso):**
* Para estados locais de formulários (inputs digitados).
* Para passar uma variável apenas para o componente vizinho (Filho direto ou Neto).
* Para dados que atualizam várias vezes por segundo (como a posição do mouse na tela), pois isso causaria travamentos de performance.

---

## 2. A Anatomia da Context API (Os 3 Pilares)

Para a arquitetura funcionar com TypeScript, ela exige a montagem de três peças separadas. A melhor prática de mercado é concentrar o Pilar 1 e o Pilar 2 no mesmo arquivo (dentro de uma pasta chamada `contexts`).

### Pilar 1: `createContext` (O Contrato e a Nuvem)
É a criação do espaço virtual. Aqui você não guarda o dado real ainda, apenas avisa ao TypeScript qual será o "formato" (a Interface) da informação que flutuará nessa nuvem.

### Pilar 2: `Provider` (A Antena Transmissora)
É um componente React especial. Ele guarda o estado real (`useState`) e abraça os outros componentes da sua aplicação (usando a propriedade genérica `children`). É ele quem recebe os dados no atributo `value={}` e os arremessa na rede.

### Pilar 3: `useContext` (O Receptor)
É o hook utilizado lá na ponta final da árvore (nos componentes folha). Ele serve como a senha do Wi-Fi para abrir a nuvem, ler os dados e trazer o autocompletar do TypeScript para dentro daquele componente específico.

---

## 3. Exemplo Prático e Completo: Contexto de Autenticação

Este é o modelo padrão de mercado para criar um sistema que verifica quem é o usuário logado e distribui essa informação para o painel principal, garantindo a tipagem forte do TypeScript.

### PASSO 1: Criando o Contexto e o Provedor (`AuthContext.tsx`)

```tsx
import { createContext, useState, ReactNode } from 'react';

// 1. O MODEL (O Contrato de Tipagem)
// Definimos como é o formato do nosso usuário logado
interface Usuario {
    id: string;
    nome: string;
    email: string;
    avatarUrl?: string; // Opcional
}

// 2. A INTERFACE DO CONTEXTO
// Tudo o que será disponibilizado no "value" do Provider precisa estar aqui
interface AuthContextType {
    usuario: Usuario | null; // Pode ser nulo se não estiver logado
    login: (dados: Usuario) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

// 3. CRIANDO A NUVEM VAZIA (createContext)
// Forçamos o TypeScript a aceitar a nuvem vazia inicial usando "as AuthContextType"
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// 4. O PROVIDER (A Antena que vai abraçar o aplicativo)
interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    // O estado central que guarda quem está logado
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    // Funções de manipulação do estado global
    function login(dados: Usuario) {
        setUsuario(dados);
        // Aqui também entraria lógica de salvar o token no localStorage/cookies
    }

    function logout() {
        setUsuario(null);
        // Lógica para limpar localStorage também iria aqui
    }

    // Variável computada para facilitar verificações nas telas
    const isAuthenticated = !!usuario;

    return (
        // O atributo 'value' carrega a informação e injeta na rede
        <AuthContext.Provider value={{ usuario, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
```

### PASSO 2: Abraçando a Aplicação (`App.tsx`)
Para que o sistema funcione, o Provedor deve ser posicionado no topo da árvore de componentes.

```tsx
import { AuthProvider } from './contexts/AuthContext';
import { RotasDoPainel } from './RotasDoPainel';

export function App() {
    return (
        // A antena liga aqui. Tudo dentro dela tem acesso ao 'AuthContext'
        <AuthProvider>
            <RotasDoPainel />
        </AuthProvider>
    );
}
```

### PASSO 3: Consumindo os Dados nas Telas (Sem Prop Drilling!)
Agora, qualquer componente dentro de `RotasDoPainel` pode se conectar ao contexto diretamente. Os componentes estruturais intermediários não precisam receber nenhuma Prop de usuário.

**Exemplo A: Componente de Cabeçalho (Puxando os dados)**
```tsx
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function CabecalhoUsuario() {
    // O Hook useContext se conecta e extrai exatamente o que precisa!
    const { usuario, logout, isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated || !usuario) {
        return <p>Visitante não identificado.</p>;
    }

    return (
        <div className="perfil-card">
            {usuario.avatarUrl && <img src={usuario.avatarUrl} alt="Foto de perfil" />}
            <span>Bem-vindo, {usuario.nome}</span>
            <button onClick={logout}>Sair do sistema</button>
        </div>
    );
}
```

**Exemplo B: Componente de Login (Enviando dados para a nuvem)**
```tsx
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function TelaLogin() {
    const { login } = useContext(AuthContext);

    function handleSimularLogin() {
        // Simulando a resposta de uma API
        const dadosDaApi = {
            id: "999",
            nome: "Cezaniltom Silva",
            email: "contato@empresa.com",
            avatarUrl: "https://github.com/cezaniltom.png"
        };

        // Ao disparar essa função, o 'usuario' muda lá no topo (App.tsx),
        // e o 'CabecalhoUsuario' é re-renderizado instantaneamente.
        login(dadosDaApi);
    }

    return (
        <button onClick={handleSimularLogin}>
            Entrar no Painel
        </button>
    );
}
```

---

## 4. Bônus Arquitetural: Criando um Custom Hook (`useAuth`)

Para tornar o código ainda mais maduro e evitar a importação dupla de `useContext` e `AuthContext` em todas as telas, a melhor prática de mercado é encapsular essa lógica em um **Custom Hook** no próprio arquivo do contexto.

Adicione este bloco no final do arquivo `AuthContext.tsx`:

```tsx
export function useAuth() {
    const context = useContext(AuthContext);
    
    // Tratamento de erro vital: impede que o hook seja usado fora do Provider
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    
    return context;
}
```

**Como fica a importação nas telas a partir de agora:**
```tsx
import { useAuth } from '../contexts/AuthContext'; // Importa apenas o Hook!

export function CabecalhoUsuario() {
    const { usuario, logout } = useAuth(); // Muito mais limpo e seguro
    // ...
}
```