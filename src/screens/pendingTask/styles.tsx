import { StyleSheet } from "react-native";
import { spacing } from "../../../theme/spacing.theme";
import { verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  pendingContainer:{
    marginTop: verticalScale(50),
    marginHorizontal: verticalScale(spacing[4]),
    flex: 1
  }
});