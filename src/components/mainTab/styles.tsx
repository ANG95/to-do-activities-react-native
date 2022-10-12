import { StyleSheet } from 'react-native';
import { color } from '../../../theme/color.theme';
import { IS_ANDROID } from '../../utils/constants';
import { moderateScale, NAVIGATION_BAR_HEIGHT, verticalScale } from '../../utils/responsive';

const { palette, primary } = color;

export default StyleSheet.create({
  containerNav: {
    height: NAVIGATION_BAR_HEIGHT,
    paddingTop: IS_ANDROID ? verticalScale(0) : verticalScale(20),
    elevation: 3,
    backgroundColor: IS_ANDROID ? '' : palette.white,
    borderTopRightRadius: verticalScale(20),
    borderTopLeftRadius: verticalScale(20),
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.26,
    shadowRadius: 8,
  },
  labelText: {
    fontSize: moderateScale(14, 0.2),
    lineHeight: verticalScale(20),
  },
  tabElementContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
