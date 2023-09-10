import { Colors } from "../../constants/Colors";
import { Platform, StyleSheet } from "react-native";

export const customStyle = ({ window }: { window: any }) =>
  StyleSheet.create({
    mt43: { marginTop: 43 },
    mt15: { marginTop: 15 },
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    containerView: {
      paddingHorizontal: 5,
      backgroundColor: Colors.white,
    },
    logo: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 11,
    },
    imageBg: {
      width: 265,
      height: 270,
      justifyContent: "center",
      alignItems: "center",
    },
    loginImageBg: {
      height: "100%",
      width: "100%",
    },
    title: {
      width: 284,
      height: 19,
      fontWeight: "400",
      fontFamily: "Avenir-Regular",
      fontSize: 14,
      lineHeight: 17,
      color: Colors.darkGray,
      marginTop: 24,
      marginBottom: 75,
    },
    backButton: {
      backgroundColor: Colors.blue1,
      width: 46,
      height: 40,
      borderRadius: 10,
      marginLeft: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    fieldContainer: {
      width: 180,
    },
    bottomContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: Colors.lightGray,
      width: 342,
      height: 72,
      borderRadius: 10,
      padding: 20,
      marginLeft: 10,
    },
    fieldLabel: {
      fontSize: 12,
      fontWeight: "500",
      fontFamily: "Avenir-Regular",
      color: Colors.darkGray,
    },
    fieldInputContainer: { borderColor: "transparent", height: 30 },
    fieldInput: {
      fontSize: 14,
      fontFamily: "Avenir-Regular",
    },
    button: {
      backgroundColor: Colors.blue1,
      fontSize: 14,
      fontFamily: "Avenir-Regular",
      width: 115,
      height: 48,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: Colors.darkGray,
    },
    numContainer: {
      // flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    send: {
      // height: 12,
      fontWeight: "400",
      fontSize: 14,
      fontFamily: "Avenir-Regular",
      lineHeight: 17,
      color: Colors.darkGray,
      marginBottom: 15,
    },
    resendContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    resendTextStyle: {
      ontWeight: "400",
      fontSize: 14,
      fontFamily: "Avenir-Regular",
      lineHeight: 17,
      color: Colors.darkGray,
    },
    resendButtonTextStyle: {
      color: Colors.red,
    },
    incorrect: {
      height: 19,
      fontWeight: "400",
      fontSize: 14,
      fontFamily: "Avenir-Regular",
      lineHeight: 17,
      color: Colors.red,
      marginBottom: 29,
      marginRight: 5,
    },
    num: {
      height: 19,
      fontWeight: "400",
      fontFamily: "Avenir-Regular",
      fontSize: 14,
      lineHeight: 17,
      color: Colors.darkGray,
      marginBottom: 29,
      marginLeft: 5,
      textDecorationLine: "underline",
    },
    centerContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    codeFiledRoot: {
      marginTop: 20,
      width: 250,
    },
    cell: {
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40,
      lineHeight: 38,
      fontFamily: "Avenir-Regular",
      fontSize: 24,
      shadowColor: Colors.shadowGrey,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.6,
      elevation: 40,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: Platform.OS === "android" ? Colors.black : Colors.white,
      backgroundColor: Colors.white,
      textAlign: "center",
      textAlignVertical: "center",
    },
    focusCell: {
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40,
      lineHeight: 38,
      fontFamily: "Avenir-Regular",
      fontSize: 24,
      shadowColor: Colors.shadowGrey,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.6,
      elevation: 40,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: Platform.OS === "android" ? Colors.red : Colors.white,
      backgroundColor: Colors.white,
      textAlign: "center",
      textAlignVertical: "center",
    },
    createBtn: {
      height: 48,
      width: 342,
      borderRadius: 10,
      backgroundColor: Colors.blue1,
      justifyContent: "center",
      alignItems: "center",
    },
    verifiedContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: window.height * 0.7,
    },
    verifiedContainerHeading: {
      fontSize: 14,
      fontFamily: "Avenir-Regular",
      color: Colors.darkGray,
      fontWeight: "700",
      lineHeight: 17,
      marginBottom: 76,
    },
    disabledBtn: {
      opacity: 0.5,
    },
    socialBtn: {
      flexDirection: "row",
      width: "25%",
      justifyContent: "space-around",
      alignSelf: "center",
    },
    termsConditions: {},
    continueBtn: {
      display: "flex",
      alignContent: "center",
      height: 130,
      zIndex: 99,
      backfaceVisibility: "hidden",
      justifyContent: "center",
      paddingLeft: 25,
      paddingRight: 25,
    },
  });
