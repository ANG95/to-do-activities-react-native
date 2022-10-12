import React from 'react';
import { View, Text } from 'react-native';
import { color } from '../../../theme/color.theme';
import { SvgIcon } from '../svgIcon/svgIconComponent';
import { MainTabProps } from './iconTabProps';
import styles from './styles';

const { primary, palette } = color;

export const IconTabs = ({
  tx,
  icon,
  focused,
}: MainTabProps) => {
  const colorElement = focused ? primary : palette.grey;
  const renderIcon = (
    <View style={styles.tabElementContainer}>
      <SvgIcon
        icon={icon}
        color={colorElement}
        heightScale={20}
        widthScale={20}
      />
      <Text style={[styles.labelText, { color: colorElement }]}>{tx}</Text>
    </View>
  );
  return renderIcon;
};
