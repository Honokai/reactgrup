import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import {UsuarioContext} from '../../contexts/user'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import {
  Container,
  Texto,
  Input,
  ButtonGroup,
  ButtonGroupText,
  ContainerGrupos
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
    data.forEach(elemento => {
      let presente = false
      if(Array.isArray(elemento.integrantes)){
        elemento.integrantes.forEach(email => {
          if(email == user.email && presente == false){
            presente = true
          }
        })
      }
      if(presente == false) {
        data.splice(index, 1)
      }
      index++
    })
    setUserGrupos(data)
  }

  useEffect(()=>{
    const listenerGrupos = firebase.firestore()
    .collection('AlunosGrupos').onSnapshot(listenUpdateGrupos)
  },[])

  return (
    <Container>
      <ContainerGrupos>
        {userGrupos.map(grupo=>(
          <ButtonGroup key={grupo.id}
            onPress={()=>(navigation.navigate({ name: "Chat", params: {id: grupo.id ,grupo: grupo.nome} })
            )}
          >
            <ButtonGroupText><MaterialCommunityIcons name="chat" size={32} color={"#000"}/>  {grupo.nome}</ButtonGroupText>
          </ButtonGroup>
        ))}
      </ContainerGrupos>
    </Container>
  )
}

export default Grupos