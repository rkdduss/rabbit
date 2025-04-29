import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Spacer } from '../../theme/GlobalStyle';
import { HeaderProps } from './Header.props';
import { HeaderContent, HeaderText, HeaderWrap } from './Header.style';


export default function Header({ icon, iconSize, text, subIcon, subIconSize, subIconAction}: HeaderProps) {
  return (
    <SafeAreaView style={{width: '100%', zIndex:1}}>
        <HeaderWrap>
        <HeaderContent>
            <Icon name={icon} size={iconSize} color="#FF3B79"></Icon>
            <HeaderText>{text}</HeaderText>
            <Spacer />
            <Pressable onPress={subIconAction}>
                <Icon name={subIcon} size={subIconSize} color="#8B96AD"></Icon>
            </Pressable>
        </HeaderContent>
        </HeaderWrap>
    </SafeAreaView>
  )
}