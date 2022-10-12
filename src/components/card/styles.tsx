import { StyleSheet } from "react-native";
import { palette } from "../../../theme/palette.theme";
import { spacing } from "../../../theme/spacing.theme";
import { scale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.18,
    shadowRadius: 4.59,
    elevation: 5,
    borderWidth: 1,
    borderRadius: scale(10),
    borderColor: palette.greyLight,
    padding: verticalScale(spacing[3]),
    backgroundColor: palette.white
  },
});