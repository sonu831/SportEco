import { StyleSheet } from "react-native";
// constants
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    padding: 20,
  },
  flexDirRow: { flexDirection: "row" },
  cardDetailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  venueName:{
    width: 100,
  }
});
