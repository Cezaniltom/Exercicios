// import { Heading } from './components/heading/Heading'
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { Container  } from './components/container/Container'
import { Logo } from './components/logo/Logo'
import { Menu } from './components/menu/Menu'
import { MenuItens } from './components/menuItens/MenuItens'
import './styles/global.css'
import './styles/theme.css'
import { CountDown } from './components/countDown/CountDown'

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
        <Logo />
      </Container>
      <Container>
        <Menu>
          <MenuItens href='/house' title='house'>
            <HouseIcon />
          </MenuItens>
          <MenuItens href='/history' title='history'>
            <HistoryIcon />
          </MenuItens>
          <MenuItens href='/settings' title='settings'>
            <SettingsIcon />
          </MenuItens>
          <MenuItens href='/sun' title='sun'>
            <SunIcon />
          </MenuItens>
        </Menu>
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
    </>
)}