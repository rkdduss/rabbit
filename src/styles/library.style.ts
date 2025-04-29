import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

export const LibraryWrap = styled(View)`
  flex: 1;
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
  margin-bottom: 24px;
`

export const PlanWrap = styled(View)`
  padding: 0 20px;
`
export const SectionContainer = styled(View)`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 16px;
`

export const SectionText = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  color: white;
`
export const SectionSubText = styled(Text)`
  font-size: 17px;
  font-weight: 500;
  color: #929BAD;
`
export const Content = styled(View)`
  width: 100%;
  flex: 1;
  padding-top: 55px;
  justify-content: flex-start;
`

export const MyFollowSection = styled(View)`
    flex-direction: column;
    justify-content: center; 
    align-items: flex-start;
    width: 100%;
`
export const MyFollowScrollSection = styled(ScrollView).attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
  }))`
    padding-left: 28px;
    padding-top: 8px;
  `
