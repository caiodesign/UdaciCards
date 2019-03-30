import styled from 'styled-components/native'


export const CardContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;

`

export const Card = styled.View`
  height: 80;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  border-bottom-color: #040F16;
  border-bottom-width: 1;
  margin-top: 40;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #040F16;
  font-weight: bold;
`

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: lighter;
  color: #040F16;
  opacity: .7
  margin-top: 5px;
`
