import { View, Text } from 'react-native'
import React from 'react'
import { BookMarkProps } from './BookMark.props'
import { BookMarkText, BookMarkWrap } from './BookMark.style'
import Icon from 'react-native-vector-icons/Ionicons'

export default function BookMark({ text, icon }: BookMarkProps) {
  return (
    <View>
        <BookMarkWrap>
            <BookMarkText>{text}</BookMarkText>
            <Icon name={icon} size={16} color='white' />
        </BookMarkWrap>
    </View>
  )
}