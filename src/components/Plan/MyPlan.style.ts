import { Pressable, View, Text } from "react-native";
import styled from "styled-components";



export const PlanContainer = styled(View)`
  width: 90%;
  height: 186px;
  background-color: #212329;
  margin: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 8px;
`
export const PlanButtonContainer = styled(View)`
  gap: 8px;
  flex-direction: row;
`

export const PlanButton = styled(Pressable)`
  width: 151.5px;
  height: 46px;
  background-color: #31353D;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`

export const PlanButtonText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  color: white;
`

