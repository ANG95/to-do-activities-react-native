import { StyleSheet } from "react-native";
import { palette } from "../../../theme/palette.theme";
import { moderateScale, scale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: verticalScale(15)
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems:'center',
  },
  taskDescription: {
    flexWrap: 'wrap',
    flex: 1,
    color: palette.blackText,
    fontSize: moderateScale(15),
    marginLeft: verticalScale(5)
  },
  dateText: {
    textAlign: 'right',
    fontStyle: 'italic',
    marginTop: verticalScale(5),
    fontSize: moderateScale(12),
    color: palette.leadLight
  },
  leftSwipe: {
    width: '40%',
    backgroundColor: palette.success,
    marginBottom: verticalScale(15),
    borderTopLeftRadius: scale(10),
    borderBottomLeftRadius: scale(10),
    right: -5,
    justifyContent:'center',
    paddingLeft: verticalScale(60)
  },
  rightSwipe: {
    width: '40%',
    backgroundColor: palette.error,
    marginBottom: verticalScale(15),
    borderTopRightRadius: scale(10),
    borderBottomRightRadius: scale(10),
    left: 5,
    justifyContent:'center',
    paddingLeft: verticalScale(25),
  },
});