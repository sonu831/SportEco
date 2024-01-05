import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    styleInputGroup: {
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: Colors.gray2,
        borderRadius: 5,
    },
    styleDropdownMenu: {
        height: 50,
        width: '100%',
        borderWidth: 1.2,
        borderColor: Colors.gray2,
        borderRadius: 5,
        backgroundColor: Colors.white
    },
    styleTextDropdownSelected: {
        fontSize: 16,
        color: "#000"
    },
    styleSelectorContainer: {
        borderColor: '#000',
        backgroundColor: 'transparent'
    },
    styleTextDropdown: {
        fontSize: 16,
        backgroundColor: '#fff'
    },
    styleItemsContainer: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 5
    },
    searchInputStyle: {
        color: '#000',
        fontSize: 16
    },
});
