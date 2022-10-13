import { StyleSheet } from "react-native";
import { color } from "../../../theme/color.theme";
import { spacing } from "../../../theme/spacing.theme";
import { verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  pendingContainer: {
    marginTop: verticalScale(8),
    marginHorizontal: verticalScale(spacing[4]),
    flex: 1
  },
  title: {
    color: color.palette.white,
    marginBottom: verticalScale(35),
    fontWeight: 'bold'
  }
});