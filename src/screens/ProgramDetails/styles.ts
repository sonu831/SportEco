import { Colors } from "../../constants/Colors";
import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

const { window } = Layout;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flexDirRow: { flexDirection: "row" },
  containerView: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
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
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontFamily: "Avenir-Regular",
    fontWeight: "700",
    fontSize: 14,
    color: Colors.darkGray,
    lineHeight: 17,
    marginTop: 12,
    marginLeft: 82,
  },
  editBtn: {
    width: 112,
    height: 35,
    borderRadius: 10,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
  },
  btnText: { color: Colors.white },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    backgroundColor: Colors.gray1,
    height: 43,
    marginTop: 43,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
  },
  listItemImage: {
    marginRight: 43,
    width: 20,
  },
  listItemText: {
    marginRight: 30,
    width: 80,
  },
  listItemTextValue: {
    marginRight: 30,
    width: window.width * 0.4,
  },
  listItemLocationImage: {
    marginRight: 20,
    width: 20,
  },
  dividerHeading: {
    justifyContent: "center",
    paddingLeft: 40,
    color: Colors.darkGray,
    lineHeight: 17,
    fontSize: 14,
    fontFamily: "Avenir-Regular",
  },
  ml10: { marginLeft: 10 },
  flex: { display: "flex", flexDirection: "row", alignItems: "center" },
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
  py16: { paddingVertical: 16 },
  playerListContainer: {
    display: "flex",
    marginTop: 40,
  },
  playerListItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  pb60: { paddingBottom: 60 },
  playerAvatar: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  playerName: {
    marginLeft: 20,
    fontFamily: "Avenir-Regular",
    fontSize: 16,
  },
});
