import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  w195: { width: 195 },
  timeInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray1,
    // padding: 10,
    borderRadius: 10,
  },
  dateBoxContainer: {
    backgroundColor: "#fff",
    width: "100%",
  },
  dateWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 15,
    width: 75,
  },
  monthDateWrapper: {
    width: 130,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
