import { View, Text } from 'react-native'
import React from 'react'
import { PlanButton, PlanButtonContainer, PlanButtonText, PlanContainer } from './MyPlan.style'
import { router } from 'expo-router'
import { Spacer } from '../../theme/GlobalStyle'

export default function MyPlan() {
  return (
    <PlanContainer>
        <View style={{alignItems: 'flex-start', rowGap: 13}}>
            <View style={{marginLeft: 10, gap: 13}}>
                <Text style={{fontSize: 17, fontWeight: 400, color: '#929BAD'}}>내 플랜</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>프로 플랜</Text>
            <View style={{flexDirection:'row', gap: 120}}>
                <Text style={{fontSize: 15, fontWeight: 400, color: '#929BAD'}}>월 3,900원</Text>
                <Text style={{fontSize: 15, fontWeight: 400, color: '#929BAD'}}>다음 결제: 12일</Text>
            </View>
            </View>
            <PlanButtonContainer>
                <PlanButton onPress={() => router.push('/')}><PlanButtonText>플랜 변경</PlanButtonText></PlanButton>
                <PlanButton onPress={() => router.push('/pages/interest')}><PlanButtonText>내 관심사 설정</PlanButtonText></PlanButton> 
            </PlanButtonContainer>
        </View>
    </PlanContainer>
  )
}