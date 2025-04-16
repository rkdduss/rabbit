import styled from 'styled-components/native'
import { Image, View, Text } from 'react-native'

export const ProfileWrap = styled(View)`
  width: 68px;
  height: 68px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`

export const ProfileEmpty = styled(View)`
  width: 100%;
  height: 100%;
  background-color: #3498db; 
  border-radius: 50px;
`
export const ProfileName = styled(Text)`
  font-size: 14px;
  color: white;
`