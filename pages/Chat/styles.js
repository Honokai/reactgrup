import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  padding-top:25px;
`;

export const ContainerInteractive = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:row;
  justify-content: center;
  align-items:center;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`
export const Input = styled.TextInput`
  background-color: #fff;
  border: 1px solid #ccc;
  width: 350px;
  height: 65px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 0 20px;
`

export const ButtonGroup = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px 0px 5px 0px;
  justify-content: center;
  align-items: flex-start;
  margin-right: ${props => props.invert? "10px":"0px"};
`

export const ButtonGroupText = styled.Text`
 color: #ae1b73;
 font-size: 16px;
 font-weight: bold;
 padding: 0px 10px 0px 10px;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 65px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  margin-right: ${props => props.invert? "10px":"0px"};
`

export const ButtonText = styled.Text`
 color: #ae1b73;
 font-size: 16px;
 font-weight: bold;
 text-align: center;
`

export const ContainerMessages = styled.View`
  width: 100%;
  flex: 6;
`

export const ContainerGrupos = styled.View`
  width: 100%;
  flex: 1;
`

export const Message = styled.Text`
  color: #fff;
  alignSelf: ${props => props.invert ? "flex-end":"flex-start"};
  background-color: ${props => props.invert ? "#1a20ab":"#aaa"};
  font-size: 20px;
  padding: 10px 10px 10px 10px;
  width: auto;
  border-radius: 10px;
  margin: 2px 0px 2px 0px;
  maxWidth: 300px;
`

export const MessageSender = styled.Text`
  color: ${props => props.invert ? "#fff":"#afd345"};
  fontWeight: bold;
  alignSelf: flex-start;
`

export const MessageDate = styled.Text`
color: aquamarine;
`