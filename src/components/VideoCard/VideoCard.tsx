import { Pressable, Text } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Badge, CardContainer, Cover, ProfileImage, ReelsImage, TopElem, Uploader, VideoBoxTitle } from './VideoCard.style'
import { Spacer } from '../../theme/GlobalStyle';
import Chip from '../Chip.tsx/Chip';

interface CardProps {
  name: string;
  title: string;
  badge: boolean;
  category: string;
  reelImage: string;
}

export default function VideoCard({ name, title, badge, category, reelImage }: CardProps) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push({
      pathname: '/pages/reelList',
      params: {
        name,
        title,
        badge : badge.toString(),
        category,
        reelImage
      }
    })}>
      
      <CardContainer>
        <ReelsImage source={{ uri: reelImage }}>
          <Cover />
          <TopElem>
          <Chip category={category}/>
          <Spacer />
          <Uploader>
            <ProfileImage />
            <VideoBoxTitle numberOfLines={1} ellipsizeMode='tail'>{name}</VideoBoxTitle>
            {badge && (
              <Badge source={require('/Users/dgsw07/Desktop/ReactNative/rabbit/assets/badge.png')} />
            )}
          </Uploader>
          <VideoBoxTitle numberOfLines={1} ellipsizeMode='tail'>{title}</VideoBoxTitle>
          </TopElem>
        </ReelsImage>
      </CardContainer>
    </Pressable>
  );
}
