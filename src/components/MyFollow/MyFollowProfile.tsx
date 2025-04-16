import { View, Text } from 'react-native'
import React from 'react'
import { ProfileEmpty, ProfileImage, ProfileName, ProfileWrap } from './MyFollowProfile.style'
import { MyFollowProps } from './MyFollowProfile.props'

export default function MyFollowProfile({ name, profileImage }: MyFollowProps) {
  return (
    <ProfileWrap>
        {profileImage ? (
            <ProfileImage source={{ uri : profileImage }} />
        ) : (
            <ProfileEmpty />
        )}
        <ProfileName>{name}</ProfileName>
    </ProfileWrap>
  )
}