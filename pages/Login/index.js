import React, { useState, useContext } from 'react';
import { Text, Image, ActivityIndicator } from 'react-native';

import {
  Container,
  Texto,
  CaixaLogin,
  Botao,
  BotaoTexto,
  ContainerBotoes,
  Input,
  InputTexto,
  Button,
  ButtonText,
  ContainerButtons,
  ForgotPassword,
  Logo,
  CaixaTextoChamada,
  TextoChamada,
  TextoGrupou
} from './styles';

import logoimg from '../../assets/logo.png'
import {UsuarioContext} from '../../contexts/user'

const Login = () => {

  const {signIn, signUp} = useContext(UsuarioContext);

  const [currentButton, setCurrentButton] = useState('aluno');
  const [email, setEmail] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [password, setPassword] = useState(null)

  function handleSignIn(){
    setCarregando(true)
    try{
      signIn(email, password)
    } catch(err) {
      console.warn(err)
    } finally {
      setCarregando(false)
    }
    
  }

  function handleSignUp(){
    setCarregando(true)
    try {
      signUp(email, password)
    } catch (error) {
      console.warn(error)
    } finally {
      setCarregando(false)
    }
    
    
  }

  return (
    <Container>

      <Logo>
        <Image source={logoimg} style={{width:300, height: 100}}/>
      </Logo>
      <CaixaTextoChamada>
        <TextoChamada>
          Problemas para formar
        </TextoChamada>
        <TextoChamada>
          um grupo de trabalho
        </TextoChamada>
        <TextoChamada>
          O <TextoGrupou>Grupou!</TextoGrupou> Resolve!
        </TextoChamada>
      </CaixaTextoChamada>

      <CaixaLogin>

        <ContainerBotoes>
          <Botao onPress={() => {
            setCurrentButton('aluno')
          }}
            lastClick={currentButton == 'aluno' ? true : false}>
            <BotaoTexto
              lastClick={currentButton == 'aluno' ? true : false}>Aluno</BotaoTexto>
          </Botao>
          <Botao
            onPress={() => {
              setCurrentButton('professor')
            }}
            lastClick={currentButton == 'professor' ? true : false}>
            <BotaoTexto
              lastClick={currentButton == 'professor' ? true : false}>Professor</BotaoTexto>
          </Botao>
        </ContainerBotoes>
        <InputTexto>Email</InputTexto>
        <Input onChangeText={ text => setEmail(text) } placeholder="Digite seu e-mail" value={email}/>
        <InputTexto>Senha</InputTexto>
        <Input onChangeText={ text => setPassword(text) } placeholder="Digite sua senha" secureTextEntry={true} value={password}/>
        <ForgotPassword>
          esqueci minha senha
        </ForgotPassword>
        <ContainerButtons>
          <Button invert={true} 
            onPress={()=>{ handleSignUp() }}
          >
            {carregando ? 
              <ActivityIndicator color="#ae1b73"/>:
              <ButtonText invert={true}>Cadastre-se</ButtonText>
            }
          </Button>
          <Button 
            onPress={()=>{ handleSignIn() }}
          >
            {carregando ? 
              <ActivityIndicator color="#fff"/>:
              <ButtonText>Entrar</ButtonText>
            }
          </Button>
        </ContainerButtons>
        
      </CaixaLogin>
    </Container>
  )
}

export default Login