import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#fff",
    zIndex: 10,
  },
  backBtn: {
    zIndex: 99,
    color: Colors.darkGray,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightContainer: {
    width: 60,
    alignItems: "flex-end",
  },
  rightTextStyle: {
    color: "#F1592A",
  },
  leftContainer: {
    width: 60,
  },
  editBackground: {
    backgroundColor: Colors.headerBackgroundEditProfile,
  },
  createProfileBackground: {
    backgroundColor: Colors.headerBackgroundCreateProfile,
  },
});
