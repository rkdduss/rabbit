import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChipContainer, ChipText } from './Chip.style'

export interface ChipProps {
    category: string
}

export default function Chip({ category }: ChipProps) {
  return (
    <ChipContainer>
      <ChipText>#{category}</ChipText>
    </ChipContainer>
  )
}

