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
    fontWeight: "700",
    fontFamily: "Avenir-Regular",
    fontSize: 14,
    marginLeft: 40,
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  justifyCenter: { justifyContent: "center" },
  fieldColumn: { flexDirection: "column", paddingHorizontal: 25 },
  fieldRowLabel: {
    fontSize: 14,
    fontFamily: "Avenir-Regular",
    marginLeft: 8,
  },
  uploadImage: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  required: {
    color: Colors.red,
  },
  fieldInput: {
    backgroundColor: Colors.gray1,
    width: 95,
    height: 35,
    padding: 10,
    borderRadius: 10,
  },
  w195: { width: 195 },
  w60: { width: 60 },
  mr10: { marginRight: 10 },
  mr27: { marginRight: 27 },
  mt10: { marginTop: 10 },
  mt21: { marginTop: 21 },
  mv20: { marginVertical: 20 },
  category: {
    width: 87,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray1,
    borderRadius: 10,
  },
  categorySelected: {
    backgroundColor: Colors.orange,
  },
  categorySelectedText: {
    color: Colors.white,
    fontWeight: "700",
    fontFamily: "Avenir-Regular",
  },
  saveBtn: {
    backgroundColor: Colors.orange,
    width: 64,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtnText: {
    fontWeight: "700",
    color: Colors.white,
    fontFamily: "Avenir-Regular",
  },
  selectAll: {
    color: Colors.orange,
    textDecorationLine: "underline",
    fontSize: 10,
    fontFamily: "Avenir-Regular",
    marginTop: 8,
  },
  alignEnd: { alignItems: "flex-end" },
  uploadIcon: {
    flex: 1,
    alignItems: "center",
  },
  px25: { paddingHorizontal: 25 },
  uploadedImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
  },
  textCapitalize: {
    textTransform: "capitalize",
  },
});
