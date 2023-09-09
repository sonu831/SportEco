import React from "react";
import { GestureResponderEvent, Image, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/images/check.png";
import { styles } from "./styles";

type CustomCheckboxProps = {
  checked: boolean | undefined;
  onChange: ((event: GestureResponderEvent) => void) | undefined;
};

const CustomCheckbox = ({ checked, onChange }: CustomCheckboxProps) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, checked ? styles.bgGreen : styles.bgGray]}
      onPress={onChange}
    >
      <Image source={checkIcon} />
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
