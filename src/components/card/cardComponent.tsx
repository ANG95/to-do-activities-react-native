import { TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  )
}