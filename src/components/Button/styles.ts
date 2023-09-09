import { Colors } from "../../constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
    paddingHorizontal: 18,
    paddingVertical: 11,
  },
  btnText: { color: Colors.white },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bgOrange: { backgroundColor: Colors.orange },
  bgWhite: { backgroundColor: Colors.white },
  textWhite: { color: Colors.white },
  textOrange: { color: Colors.orange },
});
