
import React from 'react'

import VideoCard from '../../components/VideoCard/VideoCard'
import { CardWrapper } from '../../components/VideoCard/VideoCard.style'

import { Container } from '../../theme/GlobalStyle'
import { GoodMorning, HeaderWrap, Logo, TextWrapper, WhatLecture } from '../../styles/lecture.style'


export default function Lecture() {
  return (
    <Container>
      <HeaderWrap>
        <TextWrapper>
          <GoodMorning>좋은 아침이에요!</GoodMorning>
          <WhatLecture>어떤 강의를 보시겠어요?</WhatLecture>
        </TextWrapper>
        <Logo source={require('/Users/dgsw07/Desktop/ReactNative/rabbit/assets/Union.png')}/>
        </HeaderWrap>
        <CardWrapper>
            <VideoCard name='이기찬' title='고통없이 죽는법' badge={false} category='작곡' reelImage='/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png'/>
            <VideoCard name='이상은' title='안녕하세요 이상은입니다 선유' badge={true} category='디자인' reelImage='/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_3839.png'/>
            <VideoCard name='박민주' title='안녕하세요 태국인입니다' badge={true} category='디자인' reelImage='/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_3839.png'/>
            <VideoCard name='서민덕' title='아 기분ㅈ같네' badge={false} category='영상 편집'reelImage='/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png'/>
        </CardWrapper>
    </Container>
  )
}

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function Lecture() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>테스트 화면</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#16171A',
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//   }
// });