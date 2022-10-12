import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const FloatButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('presionando')} style={styles.touchableOpacityStyle} >
      <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
        style={styles.floatingButtonStyle} />
    </TouchableOpacity>
  )
}