import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = {
  searchBox: {
    marginHorizontal: 20,
    position: "absolute",
    top: 10,
    right: 10,
    left: 10,
    zIndex: 100,
    backgroundColor: "white",
  },
  infoContainer: {
    height: 150,
    backgroundColor: Colors.white,
    padding: 10,
    alignItems: "center",
  },
  locationRow: {
    flexDirection: "row",
    width: "85%",
  },
  iconStyle: {
    paddingHorizontal: 5,
  },
};
