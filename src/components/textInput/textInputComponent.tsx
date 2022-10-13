import { TextInput as Input, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface TextInputProps {
  onChangeText?: (e:string) => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  value: string;
  style?: any;
}

export const TextInput = ({ onChangeText, keyboardType, placeholder, value, style }: TextInputProps) => {
  return (
    <Input
      style={[styles.inputContainer, {...style}]}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value}
    />
  )
}