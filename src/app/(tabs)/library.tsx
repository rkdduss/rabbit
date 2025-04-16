import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Spacer } from '../../theme/GlobalStyle'
import Header from '../../components/Header/Header'
import Feather from 'react-native-vector-icons/Feather';
import BookMark from '../../components/BookMark/BookMark';
import { BookMarkGrid, Content, LibraryWrap, MyFollowScrollSection, MyFollowSection } from '../../styles/library.style';
import MyFollowProfile from '../../components/MyFollow/MyFollowProfile';
import { ScrollView } from 'react-native-gesture-handler';

const users = [
    { 
      id: 1,
      name: '강연', 
      profileImage: '/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_3839.png' 
    },
    { 
      id: 2,
      name: '헌춘쌤', 
      profileImage: "/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png" 
    },
    { 
      id: 3, 
      name: '뚱이', 
      profileImage: null
    },
    { 
        id: 1,
        name: '강연', 
        profileImage: '/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_3839.png' 
      },
      { 
        id: 2,
        name: '헌춘쌤', 
        profileImage: "/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png" 
      },
      { 
        id: 3, 
        name: '뚱이', 
        profileImage: null
      },
  ]

export default function library() {
  return (
    <LibraryWrap>
        <Header 
            icon='bookmarks' 
            iconSize={23}
            text='보관함'
            subIcon='ellipsis-vertical' 
            subIconSize={30}
            subIconAction={() => {}}
        />
        <Content>
            <BookMarkGrid>
                <BookMark text='나중에 볼 강의' icon='time-outline'/>
                <BookMark text='꼭 필요한 강의' icon='heart-outline'/>
                <BookMark text='작곡 강의 모음' icon='musical-notes'/>
                <BookMark text='앱잼 준비' icon='phone-portrait-sharp'/>
            </BookMarkGrid>
            <MyFollowScrollSection>
  {users.map((user, index) => (
    <View key={`${user.id}-${index}`} style={{ marginRight: 8 }}>
      <MyFollowProfile 
        name={user.name} 
        profileImage={user.profileImage}
      />
    </View>
  ))}
</MyFollowScrollSection>

        </Content>
    </LibraryWrap>
  )
}

