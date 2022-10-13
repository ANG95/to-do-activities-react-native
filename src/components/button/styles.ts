import { StyleSheet } from "react-native";
import { palette } from "../../../theme/palette.theme";
import { moderateScale, SCREEN_WIDTH } from "../../utils/responsive";


export const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#3F51B5',
    paddingVertical: 8,
    borderRadius: 5
  },
  btnTextStyle: {
    color: palette.white,
    fontSize: moderateScale(16),
    textTransform: 'uppercase',
    textAlign: 'center',
  }
});