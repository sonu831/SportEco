import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { FontFamily, FontSize } from "../../assets/fonts/fonts";

export const styles = StyleSheet.create({
    container1: {
        position: "absolute",
        flexGrow: 1,
        alignSelf: "stretch",
    },
    modalContainer: {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 22,
        alignSelf: "stretch",
        flexGrow: 1,
        flexDirection: "column",
        paddingHorizontal: 12,
    },
    modalOverlay: {
        flex: 1,
        alignContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    closeIconContainer: {
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0,
    },
});

export default styles;