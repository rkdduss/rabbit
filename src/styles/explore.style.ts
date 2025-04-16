import { Pressable, ScrollView, TextInput, View } from "react-native";
import styled from "styled-components";

export const CommentInputWrap = styled(View)`
  padding: 10px;
  margin-bottom: 20px;
  width: 330px;
  height:45px;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CommentInput = styled(TextInput)`
    width: 87%;
`
export const AddButton = styled(Pressable)`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: blue;
`
export const ContentWrap = styled(View)`
  flex: 1;
  justify-content: space-between;
`

export const ScrollWrap = styled(ScrollView)`
  flex: 1;
  padding: 10px;
  margin-top: 70px;
`
