import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    padding: 20,
  },

  input: {
    borderBottomWidth: 0,
    borderColor: "grey",
    backgroundColor: "white",
    color: Colors.black2,
  },
});

export default styles;
