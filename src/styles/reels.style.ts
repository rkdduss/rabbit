import { View, Text, Pressable, ImageBackground, Dimensions } from "react-native";
import styled from "styled-components";
const { height: SCREEN_HEIGHT } = Dimensions.get('window');


export const ReelsText = styled(Text)`
  color: white;
`
export const CommentOnButton = styled(Pressable)`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 100px;
  border: 1px solid white;
`
export const ReelWrap = styled(View)`
  flex: 1;
  height: ${SCREEN_HEIGHT}px;

  justify-content: center;
  align-items: center;
  background-color: #16171A;
  padding: 70px 20px;
`

export const ReelsTitle = styled(Text)`
  width: 280px;
  font-size: ${(props) => props.theme.text.title.titleM.fontSize};
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
`
export const ReelsDetail = styled(Text)`
  font-size: ${(props) => props.theme.text.body.bodyS.fontSize};
  font-weight: ${(props) => props.theme.text.body.bodyS.fontWeight};
`
export const ReelsDetailImage = styled(ImageBackground)`
  flex: 1;
  padding: 12px;
  border-radius: 12px;
`