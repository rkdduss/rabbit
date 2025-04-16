import styled from "styled-components";
import { View, Text } from "react-native";


export const HeaderWrap = styled(View)`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const HeaderContent = styled(View)`
  padding: 40px 16px 0 24px;
  width: 100%;
  height: 107px;
  background-color: #16171A;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
`
export const HeaderText = styled(Text)`
  font-size: ${(props) => props.theme.text.title.titleM.fontSize};
  font-weight: 800;
  color: #FF3B79;
  margin-left: 5px;
`