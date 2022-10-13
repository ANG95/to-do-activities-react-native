import { StyleSheet } from "react-native";
import { color } from "../../../theme/color.theme";
import { palette } from "../../../theme/palette.theme";
import { spacing } from "../../../theme/spacing.theme";
import { moderateScale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(5),
    marginHorizontal: verticalScale(spacing[4]),
    flex: 1
  },
  headerTitle: {
    color: palette.white,
    fontSize: moderateScale(14),
    marginBottom: verticalScale(30)
  },
  sectionText: {
    fontSize: moderateScale(13),
    marginTop: verticalScale(10),
    lineHeight: verticalScale(30),
    color: color.text
  },
  randomInputContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '26%',
    marginRight: 10,
    height: 40,
    marginBottom:0
  }
});