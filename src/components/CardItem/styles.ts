import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    borderRadius: 100 / 6,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
  title: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  subTitle: {
    marginLeft: 10,
  },
});
