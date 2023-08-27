import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import { FontSize } from "../../../assets/fonts/fonts";
/* Paddings */
export const Padding = {
  p_80xl: 99,
  p_lg: 18,
};
/* border radiuses */
export const Border = {
  br_5xs: 8,
};

export const styles = StyleSheet.create({
  py16: { paddingVertical: 16 },
  pb30: { paddingBottom: 30 },
  fieldColumn: { flexDirection: "column", paddingHorizontal: 25 },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  fieldRowLabel: {
    fontSize: 14,
    fontFamily: "Avenir-Regular",
    marginLeft: 8,
  },
  orFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  chooseAnAvatarClr: {
    color: Colors.gray,
    width: 342,
  },
  createProfileTypo: {
    fontSize: FontSize.size_5xl,
    color: Colors.darkslategray,
  },
  orTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: "Avenir-Regular",
    fontWeight: "500",
  },
  yourPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  uploadPhoto1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: "Avenir-Regular",
    fontWeight: "500",
  },
  dividerLayout: {
    backgroundColor: "transparent",
    height: 1,
    width: 120,
    position: "absolute",
  },
  flex: { display: "flex", alignItems: "center", flexDirection: "column" },
  profileAvatarContainer: {
    paddingHorizontal: 25,
    alignItems: "center",
    height: 150,
  },
  avatarImgText: {
    textAlign: "center",
    fontSize: 20,
    height: 25,
    color: Colors.darkslategray,
    fontFamily: "Avenir-Regular",
    fontWeight: "500",
  },
  chooseAnAvatar: {
    height: 120,
    width: 120,
    alignSelf: "center",
  },
  chooseAvatarChild: {
    top: 25,
    left: 32,
    width: 279,
    height: 177,
    position: "absolute",
  },
  listedAvatarContainer: {
    height: 220,
    alignItems: "center",
  },
  chooseAnAvatarText: {
    color: Colors.gray5,
  },
  avatarImage: {
    justifyContent: "center",
    height: 120,
    width: 120,
  },
  createProfile: {
    marginLeft: -81,
    top: 52,
    fontWeight: "600",
    fontFamily: "Avenir-Regular",
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  backIcon: {
    top: 48,
    width: 36,
    height: 36,
    left: 24,
    position: "absolute",
  },
  step56: {
    top: 61,
    left: 306,
    color: Colors.tomato,
    textAlign: "right",
    position: "absolute",
  },
  chooseYourAvatar: {
    fontWeight: "700",
    fontFamily: "Avenir-Regular",
    fontSize: FontSize.size_5xl,
    color: Colors.darkslategray,
    top: 0,
  },
  uploadYourPhoto: {
    top: 36,
    fontSize: FontSize.size_sm,
    fontFamily: "Avenir-Regular",
    fontWeight: "500",
    color: Colors.gray,
    width: 342,
  },
  titleDescription: {
    top: 120,
    height: 52,
  },
  uploadPhoto1: {
    color: Colors.white,
  },
  uploadPhoto: {
    marginLeft: -78,
    top: 675,
    borderRadius: 24,
    backgroundColor: Colors.darkslategray,
    width: 156,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  or: {
    left: 126,
    top: 0,
    textAlign: "center",
    position: "absolute",
    color: Colors.darkslategray,
  },
  dividerChild: {
    top: 8,
    left: 0,
  },
  dividerItem: {
    top: 9,
    left: 267,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  divider: {
    top: 643,
    left: 62,
    width: 267,
    height: 16,
    position: "absolute",
  },
  createProfile341Profi: {
    backgroundColor: Colors.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});
