import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import {UsuarioContext} from '../../contexts/user';

import {
  Container,
  ContainerInteractive,
  Texto,
  Input,
  Button,
  ButtonText,
  ContainerMessages,
  Message
} from './styles';

import firebase from 'firebase';
import 'firebase/firestore'

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const {user} = useContext(UsuarioContext)
  const handleAddMessages = async () => {
    if (newMessage == "") {
      console.warn("Digite uma mensagem para envio.")
      return
    }
    try {
      await firebase.firestore().collection('mensagens').add({
        texto: newMessage,
        lida: false,
        email: user.email
      })
    } catch (error) {
      console.warn("Erro de comunicação")
    }
  }

  return (
    <Container>
      <ContainerMessages>
        {messages.map(message=>(
          <Message>{message}</Message>
        ))}
      </ContainerMessages>
      <ContainerInteractive>
        <Input placeholder="Digite uma mensagem" 
          onChangeText={ text=>{setNewMessage(text)}} value={newMessage} 
        />
        <Button onPress={() => { handleAddMessages()}}>
          <ButtonText>Enviar mensagem</ButtonText>
        </Button>
      </ContainerInteractive>
    </Container>
  )
}

export default Chat