// import { Heading } from './components/heading/Heading'
import { Container  } from './components/container/Container'
import './styles/global.css'
import './styles/theme.css'

export function App() {
  return(
    <>
      {/* <Heading
        header={<h2>Teste 1</h2>}
      >
        <header>{<h2>Teste 2</h2>}</header>
        <header>{<h2>Teste 3</h2>}</header>
        <header>{<h2>Aviso</h2>}</header>
      </Heading> */}

      <Container>
        <section>LOGO</section>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
    </>
)}