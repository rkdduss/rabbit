import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Spacer } from '../../theme/GlobalStyle'
import Header from '../../components/Header/Header'

export default function profile() {
  return (
    <Container>
        <Header 
            icon='person-circle-outline' 
            iconSize={23}
            text='나' 
            subIcon='settings-sharp' 
            subIconSize={30}
            subIconAction={() => {}}
        />
        <Spacer />
    </Container>
  )
}
