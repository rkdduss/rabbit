import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Spacer } from '../../theme/GlobalStyle'
import styled from 'styled-components'
import { AddButton, CommentInput, CommentInputWrap, ContentWrap, ScrollWrap } from '../../styles/explore.style';
import CommentBox from '../../components/CommentBox/CommentBox';
import Header from '../../components/Header/Header';

export default function Explore() {

  return (
    <Container>
    <Header 
        icon='compass-sharp' 
        iconSize={23}
        text='탐색'
        subIcon='ellipsis-vertical' 
        subIconSize={30}
        subIconAction={() => {}}
    />
    <Spacer />
</Container>
  )
}