import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import {
  Container,
  Texto,
  Botao
} from './styles';

import {UsuarioContext} from '../../contexts/user'

const Settings = () => {

  const {signOut} = useContext(UsuarioContext);

  return (
    <Container>
      <Botao onPress={()=>{ signOut() }}>
        <Texto>Sair</Texto>
      </Botao>
    </Container>
  )
}

export default Settings