import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { color } from '../../../theme/color.theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}
export const Button = ({ label, onPress, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.btnContainerStyle, { backgroundColor: disabled ? color.disabled : '#3F51B5' }]}>
        <Text style={styles.btnTextStyle}> {label} </Text>
      </View>
    </TouchableOpacity>
  )
}