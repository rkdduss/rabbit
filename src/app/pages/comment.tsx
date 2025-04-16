import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Spacer } from '../../theme/GlobalStyle'
import styled from 'styled-components'
import { AddButton, CommentInput, CommentInputWrap, ContentWrap, ScrollWrap } from '../../styles/explore.style';
import CommentBox from '../../components/CommentBox/CommentBox';

export default function Comment() {

  const [comment, setComment] = useState('');
  const [arr, setArr] = useState<string[]>([]);

  const appendComment = () => {
    if (comment.trim() === '') return
    setArr([...arr, comment]);
    setComment('')
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container style={{ flex: 1 }}>
        <ContentWrap>
          <ScrollWrap contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
            <Spacer />
            {arr.map((item, index) => (
              <CommentBox detail={item} key={index}></CommentBox>
            ))}
            <Spacer />
          </ScrollWrap>
          <CommentInputWrap>
            <CommentInput 
              placeholder='댓글을 입력하세요'
              onChangeText={setComment}
              value={comment}
            />
            <AddButton onPress={() => {appendComment()}}/>
          </CommentInputWrap>
        </ContentWrap>
      </Container>
    </KeyboardAvoidingView>
  )
}