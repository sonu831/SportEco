import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const { window } = Layout;

export const styles = StyleSheet.create({
  safeView: {
    backgroundColor: Colors.white,
    height: window.height,
  },
  containerView: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  py16: { paddingVertical: 16 },
  flex: { display: "flex", flexDirection: "row", alignItems: "center" },
  backButton: {
    backgroundColor: Colors.lightOrange,
    width: 46,
    height: 40,
    borderRadius: 10,
    marginLeft: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontFamily: "Avenir-Regular",
    fontWeight: "700",
    fontSize: 14,
  },
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  fieldRowLabel: {
    fontFamily: "Avenir-Regular",
    fontSize: 14,
    marginLeft: 8,
  },
  required: {
    color: Colors.red,
  },
  w195: { width: 195 },
  h104: { height: 104 },
  addPlayerBtn: {
    borderRadius: 10,
    backgroundColor: Colors.orange,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 201,
    height: 35,
  },
  addPlayerBtnText: {
    color: Colors.white,
    fontFamily: "Avenir-Regular",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    marginRight: 10,
  },
  alignCenter: { alignItems: "center" },
  m42: { marginTop: 42 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  minH200: {
    minHeight: 200,
  },
  listItemText: {
    color: Colors.darkGray,
    fontFamily: "Avenir-Regular",
    fontSize: 16,
    marginLeft: 21,
  },
  mb30: {
    marginBottom: 30,
  },
  mlAuto: {
    marginLeft: "auto",
  },
  playerImage: { width: 50, height: 50, borderRadius: 50 },
  mr30: { marginRight: 30 },
  saveBtn: {
    backgroundColor: Colors.orange,
    width: 64,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtnText: {
    fontFamily: "Avenir-Regular",
    fontWeight: "700",
    color: Colors.white,
  },
  opacity50: { opacity: 0.5 },
  mt85: {
    marginTop: 85,
  },
  mv20: {
    marginVertical: 20,
  },
});
