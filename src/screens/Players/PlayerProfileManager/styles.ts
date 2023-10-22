import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    padding: 20,
  },
  option: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedOption: {
    borderColor: "#000",
  },
  headerBG: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    padding: 25,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  avatarImage: {
    height: 120,
  },
  avatarImageEditIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 70,
    top: 100,
  },
});
