import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { CommentBoxWrap } from './CommentBox.style'

interface CommentBoxProps {
    detail : string
}

export default function CommentBox({ detail }: CommentBoxProps) {


  return (
    <CommentBoxWrap>
      <Text>{detail}</Text>
    </CommentBoxWrap>
  )
}