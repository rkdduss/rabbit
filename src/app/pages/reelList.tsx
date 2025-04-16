import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import Reels from './reels'; // props 받도록 수정된 버전 사용
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const data = [
  {
    id: '1',
    name: '이기찬',
    title: '고통없이 죽는법',
    badge: 'true',
    category: 'fun',
    reelImage: '/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png',
  },
  {
    id: '2',
    name: '김강연',
    title: '병원 ㅈ같다',
    badge: 'false',
    category: 'vlog',
    reelImage: '/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_3839.png',
  },
  {
    id: '3',
    name: '박민주',
    title: '인녕하세요 박민주입니다',
    badge: 'true',
    category: 'daily',
    reelImage: '/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png',
  },
  {
    id: '4',
    name: '서민덕',
    title: '아 배고파시발',
    badge: 'true',
    category: 'daily',
    reelImage: '/Users/dgsw07/Desktop/ReactNative/rabbit/assets/IMG_4565.png',
  },
];

export default function ReelsList() {
  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <Reels {...item} />
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        snapToInterval={SCREEN_HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: SCREEN_HEIGHT,
          offset: SCREEN_HEIGHT * index,
          index,
        })}
      />
    </GestureHandlerRootView>
  );
}
