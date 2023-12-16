import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    width: Dimensions.get("window").width,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: Colors.gray,
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: Colors.white,
  },
  mainView: {
    paddingHorizontal: 20,
    marginTop: -80,
  },
});
