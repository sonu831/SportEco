import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  locationRow: {
    flexDirection: "row",
    width: "85%",
    paddingTop: 8,
    paddingBottom: 7,
  },
  editIconRow: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  editIcon: {
    marginLeft: "auto",
    zIndex:10,
    paddingLeft:10,
  },
  iconStyle: {
    paddingHorizontal: 5,
    color: Colors.red,
  },
});
