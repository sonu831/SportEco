import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  logo: {
    position: "relative",
    left: 0,
    top: 0,
  },
  footballIcon: {
    position: "absolute",
    left: 50,
    top: 300,
  },
  soccerIcon: {
    position: "absolute",
    left: 100,
    top: 200,
  },
  prizeIcon: { position: "absolute", right: 100, top: 200 },
  badmintonIcon: {
    position: "absolute",
    right: 50,
    top: 300,
  },
  headingContainer: { position: "relative", top: 0, alignItems: "center" },
  title: {
    fontSize: 24,
    lineHeight: 29,
    fontFamily: "Avenir-Regular",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.blue1,
    fontSize: 14,
    width: 115,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 30,
  },
  buttonText: {
    color: Colors.darkGray,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Avenir-Regular",
    fontWeight: "700",
  },
});
