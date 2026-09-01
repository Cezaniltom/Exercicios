// import { Heading } from './components/heading/Heading'
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { Container  } from './components/container/Container'
import { Logo } from './components/logo/Logo'
import { Menu } from './components/menu/Menu'
import { MenuItens } from './components/menuItens/MenuItens'
import './styles/global.css'
import './styles/theme.css'
import { CountDown } from './components/countDown/CountDown'
import { FormContainer } from './components/forms/Forms'
import { InputForm } from './components/inputForm/InputForm'
import { useState } from 'react'
import { Heading } from './components/heading/Heading'

export function App() {


  const [numero, setNumero] = useState(0)

  function handleClick() {
    setNumero(numero + 1)
  }

  return(
    <>
      <Heading
        header={numero}
      >
        {/* <header>Numero: {numero}</header>
        <header>{<h2>Teste 3</h2>}</header>
        <header>{<h2>Aviso</h2>}</header> */}
        <button onClick={handleClick}>Aumenta</button>
      </Heading>

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
        <FormContainer>
          <InputForm name={'nome'} label={'Nome'} type={'text'} />
          <InputForm name={'senha'} label={'Senha'} type={'password'} />
          <InputForm name={'email'} label={'Email'} type={'email'} />
          <InputForm name={'anexo'} label={'Anexo'} type={'file'} />
          <InputForm name={'enviar'} label={''} type={'submit'} />
          <span>{numero}</span>
        </FormContainer>
      </Container>
    </>
)}