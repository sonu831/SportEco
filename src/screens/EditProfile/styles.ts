import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { color } from "react-native-elements/dist/helpers";
import { colors } from "react-native-elements";

const { window } = Layout;

export const styles = StyleSheet.create({
  safeView: {
    backgroundColor: Colors.white,
    height: window.height,
  },
  containerView: {
    paddingHorizontal: 0,
  },
  py16: { padding: 10 },
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
  fieldCol: {
    flexDirection: "column",
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.gray5,
  },
  w195: { width: 195 },
  w100: { width: "100%" },
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
  nextBtn: {
    backgroundColor: Colors.orange,
    width: 64,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nextBtnText: {
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
  pb30: { paddingBottom: 30 },
  uploadedImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
  },
  textCapitalize: {
    textTransform: "capitalize",
  },
  footer: {
    bottom: 10,
    alignSelf: "center",
  },
  searchView: {
    width: "100%",
    padding: 5,
    height: "100%",
    paddingVertical: 20,
  },
  profileAvatarContainer: {
    paddingHorizontal: 25,
    alignItems: "center",
    height: 150,
  },
  avatarImage: {
    height: 120,
    justifyContent: "center",
    alignContent: "center",
  },
  genderDropdown: {
    width: "100%",
    height: 45,
    backgroundColor: color.white,
    borderColor: Colors.gray5,
  },
  saveBtn: {
    marginTop: 20,
  },
  curveImageBg: {
    position: 'absolute',
    width: "100%",
    height: 190
  },
});
