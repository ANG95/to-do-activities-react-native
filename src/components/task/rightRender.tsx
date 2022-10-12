import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgIcon } from '../svgIcon/svgIconComponent'
import { palette } from '../../../theme/palette.theme'

export const RightRender = () => {
  return (
    <View style={styles.rightSwipe}>
      <SvgIcon icon="trash" width={35} height={35} color={palette.white} />
    </View>
  )
}
