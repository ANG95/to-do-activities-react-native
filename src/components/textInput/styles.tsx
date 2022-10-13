import { StyleSheet } from "react-native";
import { color } from "../../../theme/color.theme";
import { verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  inputContainer: {
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: verticalScale(10),
    paddingHorizontal: verticalScale(12)
  }
});