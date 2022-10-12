import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgIcon } from '../svgIcon/svgIconComponent'
import { palette } from '../../../theme/palette.theme'

export const LeftRender = () => {
  return (
    <View style={styles.leftSwipe}>
      <SvgIcon icon="check" width={35} height={35} color={palette.white} />
    </View>
  )
}
