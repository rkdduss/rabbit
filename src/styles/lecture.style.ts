import { View, Text, Image } from "react-native";

import styled from "styled-components";

export const CardContainer = styled(View)`
  padding: 12px;
  width: 161.5px;
  height: 245px;
  border-radius: 8px;
  background-color: white;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
`


export const CardWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`

export const Badge = styled(Image)``


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


export const GoodMorning = styled(Text)`
  font-size: ${(props) => props.theme.text.title.titleL.fontSize};
  font-weight: 700;
  color: white;
`

export const WhatLecture = styled(Text)`
  font-size: ${(props) => props.theme.text.title.titleL.fontSize};
  font-weight: 700;
  color: #FF3B79;
`

export const TextWrapper = styled(View)`
  padding: 0 20px;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 16px;
`

export const Logo = styled(Image)`
`

export const HeaderWrap = styled(View)`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`