import styled from 'styled-components/native'

export const CardContainer = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const ButtonTitle = styled.Text`
  color: ${({ color }) => (color === 'lighter') ? '#fff' : '#000'};
`

export const ButtonContainer = styled.View`
  max-height: 70;
  flex: 1;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
