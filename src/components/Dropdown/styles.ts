import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  dropdown: {
    height: 35,
    width: 195,
    borderColor: Colors.gray1,
    backgroundColor: Colors.gray1,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontFamily: "Avenir-Regular",
    fontSize: 12,
    color: Colors.gray,
  },
  selectedTextStyle: {
    fontFamily: "Avenir-Regular",
    fontSize: 12,
  },
  selectedDropdownItemContainer: {
    backgroundColor: Colors.orange,
  },
  selectedDropdownItem: {
    color: Colors.white,
    fontFamily: "Avenir-Regular",
    fontWeight: "700",
  },
  dropdownItemContainer: {
    padding: 10,
  },
  dropdownItem: {
    fontFamily: "Avenir-Regular",
    fontSize: 12,
  },
});
