import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

export const LibraryWrap = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #16171A;
`

export const BookMarkGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`

export const MyFollowSection = styled(View)`
  flex-direction: row;
  justify-content: flex-start; 
  gap: 8px;
  width: 100%;
`


export const Content = styled(View)`
  flex: 1;
  padding-top :100px;
  justify-content: flex-start;
  align-items: center;
`

export const MyFollowScrollSection = styled(ScrollView).attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
  }))`
    margin-top: 16px;
    padding-left: 8px;
  `
  