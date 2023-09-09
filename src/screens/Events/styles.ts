import { StyleSheet } from "react-native";
import { bottomNavigationHeight } from "../../constants";
import { Colors } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const { window } = Layout;

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.white,
    height: window.height - bottomNavigationHeight,
    paddingBottom: 10,
  },
  mainContainer: {
    marginTop: 20,
    height: window.height - bottomNavigationHeight,
  },
  menuIconContainer: {
    borderRadius: 10,
    backgroundColor: Colors.lightOrange,
    width: 57,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
    marginHorizontal: 40,
  },
  noPlayerContainer: {
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
  mx40: { marginHorizontal: 40 },
  noPlayerText: {
    fontFamily: "Avenir-Regular",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 17,
    color: Colors.darkGray,
    marginTop: 21,
  },
  floatingBtn: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
});
