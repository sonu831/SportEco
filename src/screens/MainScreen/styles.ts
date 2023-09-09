import { bottomNavigationHeight } from "./../../constants/index";
import { Colors } from "./../../constants/Colors";
import Layout from "../../constants/Layout";
import { StyleSheet, Platform } from "react-native";

const { window } = Layout;

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.white,
    height: window.height - bottomNavigationHeight,
  },
  mainContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
  },
  menuIconContainer: {
    borderRadius: 10,
    backgroundColor: Colors.lightOrange,
    width: 57,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  heading: {
    color: Colors.darkGray,
    fontWeight: "700",
    fontFamily: "Avenir-Regular",
    fontSize: 14,
    lineHeight: 17,
  },
  viewMore: {
    flexDirection: "row",
  },
  viewMoreText: {
    color: Colors.lightOrange1,
    marginRight: 5,
    textDecorationLine: "underline",
  },
  scrollView: {
    backgroundColor: Colors.white,
    marginTop: 28,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  eventContainer: {
    width: 140,
    height: 135,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.shadowGray1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginRight: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  eventHeading: {
    fontFamily: "Avenir-Regular",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    color: Colors.orange,
    marginBottom: 21,
  },
  eventDateTime: {
    fontFamily: "Avenir-Regular",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14,
    textAlign: "center",
    color: Colors.darkGray,
    width: 110,
  },
  mt11: {
    marginTop: 11,
  },
  navigator: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  navigatorItem: {
    width: 112,
    height: 120,
    borderRadius: 10,
    borderColor: Colors.lightOrange,
    backgroundColor: Colors.lightOrange,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },
  navigatorItemText: {
    marginTop: 4,
    fontFamily: "Avenir-Regular",
  },
  mr42: {
    marginRight: 42,
  },
});
