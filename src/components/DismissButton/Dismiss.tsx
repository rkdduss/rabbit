import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import styled from 'styled-components'
import { DismissText } from './Dismiss.style'
import { Spacer } from '../../theme/GlobalStyle'

export default function Dismiss() {
  return (
    <Pressable onPress={() => router.back()}>
        <DismissText>X</DismissText>
    </Pressable>
  )
}

