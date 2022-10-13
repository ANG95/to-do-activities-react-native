import { StyleSheet } from "react-native";
import { color } from "../../../theme/color.theme";
import { moderateScale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(10),
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBarUnClicked: {
    paddingHorizontal: verticalScale(10),
    flexDirection: "row",
    width: "99%",
    backgroundColor: color.palette.greyLight,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBarClicked: {
    flexDirection: "row",
    paddingHorizontal: verticalScale(15),
    width: "80%",
    backgroundColor: color.dim,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: moderateScale(15),
    marginLeft: 10,
    width: "90%",
  },
});