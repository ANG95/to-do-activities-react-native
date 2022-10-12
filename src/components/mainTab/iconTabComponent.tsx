import React from 'react';
import { View, Text } from 'react-native';
import { color } from '../../../theme/color.theme';
import { SvgIcon } from '../svgIcon/svgIconComponent';
import { MainTabProps } from './iconTabProps';
import styles from './styles';

const { primary, palette, } = color;

export const IconTabs = ({
  tx,
  icon,
  focused,
}: MainTabProps) => {
  const colorElement = focused ? palette.white : palette.greyLight;
  const renderIcon = (
    <View style={styles.tabElementContainer}>
      <SvgIcon
        icon={icon}
        color={colorElement}
        heightScale={focused ? 28 : 25}
        widthScale={focused ? 28 : 25}
      />
      <Text
        style={[styles.labelText, { 
          color: colorElement,
          fontWeight: focused? 'bold': '200'
        }]}
      >
        {tx}
      </Text>
    </View>
  );
  return renderIcon;
};
