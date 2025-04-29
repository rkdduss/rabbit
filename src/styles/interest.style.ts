import { TouchableWithoutFeedback } from "react-native";
import { Pressable, View, Text, Animated, Touchable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components";

export const InterestContainer = styled(View)`
  flex: 1;
  background-color: #16171A;
  align-items: center;
  padding-top: 65px;
`

export const InterestWrap = styled(View)`
  padding: 20px 0;
  width: 90%;
  height: 150px;
  background-color: #212329;
  border-radius: 8px;
  margin-bottom: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const InterestSearchWrap = styled(View)`
  padding: 0 16px;
  margin-bottom: 20px;
  width: 90%;
  height: 46px;
  background-color: #212329;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
`
export const InterestSearchInput = styled(TextInput)`
  color: white;
`
export const InterestCircle = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #31353D;
  justify-content: center;
  align-items: center;
`
export const InterestCircleText = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  color: #C9C9C9;
`

export const InterestCategory = styled(Pressable)`
  padding: 0 16px;
  margin: 8px 5px;
  width: fit-content;
  height: 46px;
  background-color: #212329;
  justify-content: center;
  border-radius: 100px;
`
export const StyledInterestCategory = styled(Pressable)<{ isSelected: boolean }>`
  padding: 0 16px;
  margin: 8px 5px;
  height: 46px;
  background-color: ${({ isSelected }) => (isSelected ? '#626873' : '#212329')};
  justify-content: center;
  border-radius: 100px;
`

export const AnimatedInterestCategory = styled(Animated.createAnimatedComponent(Pressable))`
  padding: 0 16px;
  margin: 8px 5px;
  height: 46px;
  justify-content: center;
  border-radius: 100px;
`
export const InterestSelectEndButton = styled(TouchableOpacity)`
  width: 90%;
  height: 46;
  background-color: #FF3B79;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`