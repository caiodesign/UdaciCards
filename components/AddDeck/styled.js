
import styled from 'styled-components/native'

export const CardContainer = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const HeaderContainer = styled(CardContainer)`
  max-height: 200;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #040F16;
  font-weight: bold;
`

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 100;
  color: #040F16;
  opacity: .7;
  margin-top: 5px;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => (color === 'lighter') ? '#fff' : '#000'};
  width: 300;
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 20px;
  height: 50;
  text-align: center;
`

export const ButtonTitle = styled.Text`
  color: ${({ color }) => (color === 'lighter') ? '#fff' : '#000'};
  text-align: center;
  padding-top: 5px;
`

export const ButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Input = styled.TextInput`
  border: 0;
  border-color: #ddd;
  border-bottom-width: 1px;
  width: 80%;
  margin: 0 auto;
  font-size: 24px;
  margin-bottom: 60px;
  text-align: center;
  padding-bottom: 7px;
`

export const Label = styled.Text`
  font-size: 22px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
`

export const ErrorText = styled.Text`
  color: red;
  font-size: 18px;
  text-align: center;
`
