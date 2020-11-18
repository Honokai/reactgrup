import React, { useContext, useEffect, useState } from 'react';
import { Text, StatusBar } from 'react-native';
import {UsuarioContext} from '../../contexts/user';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import {
  ContainerChat,
  ContainerInteractive,
  Texto,
  Input,
  Button,
  ButtonText,
  ContainerMessages,
  Message,
  MessageSender,
  MessageDate
} from './styles';

import firebase from 'firebase';
import 'firebase/firestore'



export const Chat = ({route, navigation}) => {
  const { id, grupo } = route.params;
  const [messages, setMessages] = useState([]);
  const [grupos] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const {user} = useContext(UsuarioContext)

  const listenUpdateMessages = (snap) => {
    const data = snap.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    if(data.length > 0){
      let ultimo = data.length
      data[ultimo-1].ultimo = true
    }
    setMessages(data);
  }

  useEffect(()=>{
    const listener = firebase.firestore()
    .collection('AlunosGrupos').doc(id).collection('mensagens').orderBy('data', 'asc').onSnapshot(listenUpdateMessages)
  },[])

  const handleAddMessages = async () => {
    if (newMessage == "") {
      console.warn("Digite uma mensagem para envio.")
      return
    }
    try {
      const date = new Date()
      await firebase.firestore().collection('AlunosGrupos').doc(id).collection('mensagens').add({
        texto: newMessage,
        lida: false,
        email: user.email,
        data: date.toISOString()
      })
      setNewMessage("")
    } catch (error) {
      console.warn("Erro de conexão")
    }
  }

  return (
    <ContainerChat>
      <StatusBar backgroundColor="rgb(140,150,180)" />
      <ContainerMessages>
        {messages.map(message=>(
          <Message key={message.id} invert={message.email == user.email ? true : false}>
            <MessageSender invert={message.email == user.email ? true : false}>
              {message.email == user.email? "você": message.email}
            </MessageSender>{"\n"}
            {message.texto}{"\n"}
            <MessageDate>
              {new Date(message.data).toLocaleString().substr(0,19)}
            </MessageDate>
          </Message>
        ))}
        {grupos.map(item=>(
          <Message>
            {item.nome}
          </Message>
        ))}
      </ContainerMessages>
      <ContainerInteractive>
        <Input placeholder="Digite uma mensagem"
          onChangeText={ text=>{setNewMessage(text)}} value={newMessage} 
        />
        <Button onPress={() => { handleAddMessages()}}>
          <ButtonText>
            <MaterialCommunityIcons name="send" size={32} color={"#000"}/> 
          </ButtonText>
        </Button>
      </ContainerInteractive>
    </ContainerChat>
  )
}

export default Chat;