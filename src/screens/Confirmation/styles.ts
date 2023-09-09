import { Colors } from "../../constants/Colors";
import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import { bottomNavigationHeight } from "../../constants/index";

const { window } = Layout;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  containerView: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  bgBlue: { backgroundColor: Colors.blue1 },
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
  label: {
    marginBottom: 94,
  },
  content: {
    height: window.height - bottomNavigationHeight,
    alignItems: "center",
    paddingTop: window.height / 4,
  },
});
