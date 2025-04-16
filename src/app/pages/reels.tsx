import { InteractionManager, StyleSheet, Text } from 'react-native';
import React, { useCallback, useRef, useMemo, useState } from 'react';
import { Container, Spacer } from '../../theme/GlobalStyle';
import Dismiss from '../../components/DismissButton/Dismiss';
import { useLocalSearchParams } from 'expo-router';
import { CommentOnButton, ReelWrap, ReelsDetail, ReelsDetailImage, ReelsText, ReelsTitle } from '../../styles/reels.style';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { View } from 'react-native';
import { ReelsImage, TopElem } from '../../components/VideoCard/VideoCard.style';
import Comment from './comment';
import { Colors } from 'react-native/Libraries/NewAppScreen';


interface ReelsProps {
  name: string;
  title: string;
  badge: string;
  category: string;
  reelImage: string;
}


export default function Reels({ name, title, badge, category, reelImage }: ReelsProps) {
  const [pause, setPause] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['70%', '93%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openBottomSheet = () => {
    InteractionManager.runAfterInteractions(() => {
      bottomSheetRef.current?.snapToIndex(1);
    });
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReelWrap>
      <ReelsDetailImage source={{ uri: reelImage }}>
        <View style={{ display:'flex', flexDirection: 'row', paddingLeft: 20}}>
            <Dismiss />
          <Spacer />
        </View>
        <Spacer />
        <View style={{ display:'flex', flexDirection: 'row'}}>
        <View style={{ alignItems: 'flex-start', backgroundColor: 'black'}}>
          <ReelsTitle>{title}</ReelsTitle>
          <View style={{ display:'flex', flexDirection:'row' }}>
            <ReelsText>{name}</ReelsText>
            <ReelsText>{badge === 'true' ? "✅" : ''}</ReelsText>
            </View>
          </View>
            <Spacer />
        <CommentOnButton onPress={openBottomSheet} />
        </View>


        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Comment />
          </BottomSheetView>
        </BottomSheet>
        </ReelsDetailImage>
      </ReelWrap>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
