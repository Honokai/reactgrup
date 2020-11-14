import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import {UsuarioContext} from '../../contexts/user';

import {
  Container,
  Container5,
  ContainerMessage,
  Texto,
  Input,
  Button,
  ButtonText
} from './styles';

const Chat = () => {

  const {user} = useContext(UsuarioContext)

  return (
    <Container>
      <Container5>
        <Texto>{user.email}</Texto>
      </Container5>
      <ContainerMessage>
        <Input placeholder="Digite uma mensagem"/>
        <Button>
          <ButtonText>Enviar mensagem</ButtonText>
        </Button>
      </ContainerMessage>
    </Container>
  )
}

export default Chat