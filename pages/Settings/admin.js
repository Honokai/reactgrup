import React, { useState, useEffect, Fragment } from 'react';


import {
    Container,
    ButtonGroupText
} from './styles'
import firebase from 'firebase';
import 'firebase/firestore';

import Select from 'react-select'

const Gestao = () => {

    const [todosGrupos, setTodosGrupos] = useState([])

    const listenUpdateAllGrupos = (snap) => {
        const data = snap.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setTodosGrupos(data)
    }

    useEffect(()=>{
        const listenerGrupos = firebase.firestore()
        .collection('AlunosGrupos').onSnapshot(listenUpdateAllGrupos)
    },[])
      
    return (
        <Container>
            
        </Container>
    )
}

export default Gestao;