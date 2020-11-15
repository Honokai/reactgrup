import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export const Botao = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-right:${props => props.invert? "10px":"0px"};
`

export const Texto = styled.Text`
  color: #ae1b73;
  font-size: 20px;
  text-align: center;
`

export const ButtonGroupText = styled.Text`
 color: #fff;
 font-size: 16px;
 font-weight: bold;
 padding: 0px 10px 0px 10px;
`