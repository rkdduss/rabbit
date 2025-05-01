import { View, Text, Pressable, Animated, Alert } from 'react-native'
import React, { useState } from 'react'
import { 
  AnimatedInterestCategory,
  InterestCategory, 
  InterestCircle, 
  InterestCircleText, 
  InterestContainer, 
  InterestSearchInput, 
  InterestSearchWrap, 
  InterestSelectEndButton, 
  InterestWrap, 
  StyledInterestCategory
} from '../../styles/interest.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { router } from 'expo-router'
import { Spacer } from '../../theme/GlobalStyle'

interface Props {
  onToggle: () => void;
  isOn: boolean;
}

export default function Interest({ onToggle, isOn }: Props) {
  const [interest, setInterest] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [interestCategory] = useState<string[]>([
    "음악",
    "리뷰", 
    "운동", 
    "공부",
    "사진", 
    "요리", 
    "Flutter", 
    "커피", 
    
    "디자인",
    "기술", 
    "HTML", 
    "iOS", 
    "개발", 
    "아이폰"
  ]);


const [animatedValues, setAnimatedValues] = useState<{ [key: string]: Animated.Value }>({});
const toggleCategory = (category: string) => {
const isSelected = selectedCategories.includes(category);
  
  if (!animatedValues[category]) {
    setAnimatedValues(prev => ({
      ...prev,
      [category]: new Animated.Value(isSelected ? 1 : 0)
    }));
  }

  if (isSelected) {
    Animated.timing(animatedValues[category], {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setSelectedCategories(prev => prev.filter(item => item !== category));
    });
  } else {
    if (selectedCategories.length >= 5) return;
    setSelectedCategories(prev => [...prev, category]);
    Animated.timing(animatedValues[category] || new Animated.Value(0), {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();

    if (!animatedValues[category]) {
      setAnimatedValues(prev => ({
        ...prev,
        [category]: new Animated.Value(1)
      }));
    }
  }
};

const createAlert = () => 
  Alert.alert("저장 완료", "관심사가 변경되었어요!", [
    {
      text: '확인',
      onPress: () => router.back()
      
    }
  ])
  return (
    <InterestContainer>
      <Pressable onPress={() => router.back()} style={{ width: '90%', marginBottom: 87.5 }}>
        <Icon name="arrow-back" size={30} color='#929BAD' />
      </Pressable>

      <InterestWrap>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {[...Array(5)].map((_, index) => (
            <InterestCircle key={index}>
              <InterestCircleText>
                {selectedCategories[index] || index + 1}
              </InterestCircleText>
            </InterestCircle>
          ))}
        </View>
        <Text style={{ fontSize: 20, fontWeight: '700', color: "white" }}>자주 보고 싶은 관심사를 선택하세요</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', color: "white" }}>최소 5개 이상</Text>
      </InterestWrap>

      <InterestSearchWrap>
        <InterestSearchInput
          placeholder='관심사 검색'
          placeholderTextColor='#929BAD'
          value={interest}
          onChangeText={setInterest}
        />
        <Spacer />
        <Icon name='search' size={15} color="#929BAD" />
      </InterestSearchWrap>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {interestCategory.map((category, index) => {
  const isSelected = selectedCategories.includes(category);
  const animatedValue = animatedValues[category] || new Animated.Value(isSelected ? 1 : 0);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#212329', '#626873'],
  });
    return (
      <AnimatedInterestCategory
        key={index}
        onPress={() => toggleCategory(category)}
        style={{ backgroundColor }}
      >
        <Text style={{ fontSize: 15, fontWeight: '400', color: 'white' }}>
          {category}
        </Text>
      </AnimatedInterestCategory>
    );
  })}

      </View>
      <Text style={{fontSize: 15, fontWeight: 400, color: '#929BAD', marginTop: 14}}>선택하신 관심사에 따라 추천 영상이 변경됩니다.</Text>
      <Spacer />
      <InterestSelectEndButton onPress={createAlert}>
        <Text style={{fontSize: 15, fontWeight: 500, color: 'white'}}>저장</Text>
      </InterestSelectEndButton>
    </InterestContainer>
  )
}
