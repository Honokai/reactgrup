import React, { useContext, useEffect, useState } from 'react'
import { Text, StatusBar } from 'react-native'
import {UsuarioContext} from '../../contexts/user'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import {
  Container,
  Texto,
  Input,
  ButtonGroup,
  ButtonGroupText,
  ContainerGrupos,
  NaoInserido
} from './styles'

import firebase from 'firebase'
import 'firebase/firestore'

const Grupos = ({navigation}) => {

  const [grupos, setGrupos] = useState([])

  const [userGrupos, setUserGrupos] = useState([])

  const {user} = useContext(UsuarioContext)

  const listenUpdateGrupos = (snap) => {
    const data = snap.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setGrupos(data)
    let index = 0
    let presente
    let pertence = []
    data.forEach(elemento => {
      presente = false
      if(Array.isArray(elemento.integrantes)){
        elemento.integrantes.forEach(messageEmail => {
          if(messageEmail === user.email && presente == false) {
            presente = true
            pertence.push(data[index])
          }
        })
      }
      /*
      if(presente == false) {
        data.splice(index, 1)
      }
      */
      index++
    })
    setUserGrupos(pertence)
  }

  useEffect(()=>{
    const listenerGrupos = firebase.firestore()
    .collection('AlunosGrupos').onSnapshot(listenUpdateGrupos)
  },[])

  return (
    <Container>
      <StatusBar backgroundColor="rgb(140,150,180)" />
      <ContainerGrupos>
        {
          Array.isArray(userGrupos) && userGrupos.length?userGrupos.map(grupo=>(
            <ButtonGroup key={grupo.id}
              onPress={()=>(navigation.navigate({ name: "Chat", params: {id: grupo.id ,grupo: grupo.nome} })
              )}
            >
              <ButtonGroupText><MaterialCommunityIcons name="chat" size={32} color={"#000"}/>  {grupo.nome}</ButtonGroupText>
            </ButtonGroup>
          )):<NaoInserido>Este usuário não está inserido em nenhum grupo</NaoInserido>
        }
      </ContainerGrupos>
    </Container>
  )
}

export default Grupos