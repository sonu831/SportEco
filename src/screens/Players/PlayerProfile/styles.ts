import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    backgroundColor: "#FBF1D8",
    padding: 20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  profileImage: {
    marginRight: 10,
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  viewProfileText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  mainView: {
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
