import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        padding: 20
    },
    imagePickerStyle: {
        width: '100%',
        height: 180,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    }
})