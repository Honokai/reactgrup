import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import {
  Container,
  Texto,
  Botao
} from './styles';

import Gestao from './admin';

import {UsuarioContext} from '../../contexts/user'

const Settings = ({navigation}) => {

  const {signOut} = useContext(UsuarioContext);

  return (
    <Container>
      <Botao onPress={()=>{ navigation.push('Gestao') }}>
        <Texto>Adicionar alunos a grupos</Texto>
      </Botao>
      <Botao onPress={()=>{ signOut() }}>
        <Texto>Sair</Texto>
      </Botao>
    </Container>
  )
}

export default Settings