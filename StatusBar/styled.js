import styled from 'styled-components/native'
import { Constants } from 'expo'

export const StatusContainer = styled.View`
  backgroundColor: ${({ bg }) => bg || '#000'};
  height: ${Constants.statusBarHeight};
`
