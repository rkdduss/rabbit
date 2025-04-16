import { Pressable, Text, View } from "react-native";
import styled from "styled-components";

export const BookMarkWrap = styled(Pressable)`
  width: 163.5px;
  height: 46px;
  flex-direction:row;
  background-color: #212329;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const BookMarkText = styled(Text)`
  font-size: ${(props) => props.theme.text.body.bodyS.fontSize};
  color: white;

`
