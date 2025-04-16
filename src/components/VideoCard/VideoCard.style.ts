import { ImageBackground, View, Text } from "react-native";
import { Image } from 'react-native';
import styled from "styled-components";

export const CardContainer = styled(View)`
  width: 161.5px;
  height: 245px;
  border-radius: 12px;
  overflow: hidden; 
  background-color: #c4c4c4;
`

export const ReelsImage = styled(ImageBackground)`
  flex: 1;
  padding: 12px;
  border-radius: 12px;
  
`

export const Cover = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 1;
`
export const TopElem = styled(View)`
  flex: 1;
  z-index: 1;
`

export const CardWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`

export const Badge = styled(Image)`
`

export const Uploader = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const ProfileImage = styled(View)`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 100px;
`

export const VideoBoxTitle = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: white;
`