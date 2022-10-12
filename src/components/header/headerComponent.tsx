import { TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgIcon } from '../svgIcon/svgIconComponent'
import { palette } from '../../../theme/palette.theme'
import { IS_IOS } from '../../utils/constants'


export const Header = () => {
  return (
    <View
      style={{
        backgroundColor: palette.white,
        position:'absolute',
      }}>
      <SvgIcon
        icon="header"
        widthScale={IS_IOS ? 350 : 351}
        heightScale={IS_IOS ? 79 : 78}
      />
    </View>
  )
}