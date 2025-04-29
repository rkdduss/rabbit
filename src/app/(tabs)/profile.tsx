import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Spacer } from '../../theme/GlobalStyle'
import Header from '../../components/Header/Header'
import { BannerImage, ProfileContainer, ProfileContent } from '../../styles/profile.style'

export default function profile() {
  return (
    <ProfileContainer>
        <Header 
            icon='person-circle-outline' 
            iconSize={23}
            text='나' 
            subIcon='settings-sharp' 
            subIconSize={30}
            subIconAction={() => {}}
        />
        <ProfileContent>
            <BannerImage source={require('/Users/dgsw07/Desktop/ReactNative/rabbit/assets/profileImage.jpg')}/>
        </ProfileContent>
    </ProfileContainer>
  )
}
