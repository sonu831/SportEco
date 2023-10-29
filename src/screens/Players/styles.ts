import { Colors } from "../../constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    padding: 20,
  },
  noPlayersContainer: {
    marginTop: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noPlayersText: {
    color: "grey",
    letterSpacing: 2,
  },
});
