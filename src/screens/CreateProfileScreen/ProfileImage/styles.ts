import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../assets/fonts/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: "column",
    paddingHorizontal: 25,
  },
  profileAvatarContainer: {
    paddingHorizontal: 25,
    alignItems: "center",
    height: 150,
  },
  avatarName: {
    textAlign: "center",
    fontSize: 20,
    height: 25,
    color: Colors.darkslategray,
    fontFamily: "Avenir-Regular",
    fontWeight: "500",
  },
  avatarImage: {
    height: 120,
    justifyContent: "center",
    alignContent: "center",
  },
  listedAvatarContainer: {
    height: 220,
    alignItems: "center",
  },
  chooseAnAvatarText: {
    color: Colors.gray5,
    marginTop: 12,
    marginBottom: 6,
  },
  avatarListImage: {
    width: 279,
    height: 177,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
  },
  curveImageBg: {
    position: 'absolute',
    width: "100%",
    height: '71%'
  }
});
