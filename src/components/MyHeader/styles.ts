import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goBackButton: {
    backgroundColor: "#FFF",
    borderRadius: 100,
    marginLeft: 10,
  },
  actionButton: {
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 100,
  },
  disabledButton: {
    backgroundColor: "#d3d3d3",
  },
  placeholderText: {
    color: "transparent",
  },
});
