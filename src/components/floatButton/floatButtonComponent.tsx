import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
interface FloatButtonProps {
  onPress: ()=>void;
}

export const FloatButton = ({onPress}: FloatButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.touchableOpacityStyle} >
      <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
        style={styles.floatingButtonStyle} />
    </TouchableOpacity>
  )
}