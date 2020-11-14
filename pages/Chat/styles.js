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
 color: #ae1b73};
 font-size: 16px;
 font-weight: bold;
 text-align: center;
`

export const ContainerMessages = styled.View`
  width: 100%;
  flex: 6;
`

export const Message = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: justify;
`