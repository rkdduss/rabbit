import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Spacer } from '../../theme/GlobalStyle'
import Header from '../../components/Header/Header'
import BookMark from '../../components/BookMark/BookMark';
import { BookMarkGrid, Content, LibraryWrap, MyFollowScrollSection, MyFollowSection, PlanWrap, SectionContainer, SectionSubText, SectionText } from '../../styles/library.style';
import MyFollowProfile from '../../components/MyFollow/MyFollowProfile';
import MyPlan from '../../components/Plan/MyPlan';
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
           <MyPlan />
          <SectionContainer>
            <SectionText>북마크</SectionText>
            <Spacer />
          </SectionContainer>
            <BookMarkGrid>
                <BookMark text='나중에 볼 강의' icon='time-outline'/>
                <BookMark text='꼭 필요한 강의' icon='heart-outline'/>
                <BookMark text='작곡 강의 모음' icon='musical-notes'/>
                <BookMark text='앱잼 준비' icon='phone-portrait-sharp'/>
            </BookMarkGrid>
            <SectionContainer>
                <SectionText>팔로우</SectionText>
                <SectionSubText>{users.length}명</SectionSubText>
                <Spacer />
            </SectionContainer>
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

