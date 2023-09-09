import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Text } from "react-native-elements";
import { styles } from "./styles";

type OptionType = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  options: OptionType[];
  value: string;
  onChange: (item: any) => void;
  containerStyle?: StyleProp<ViewStyle>;
  isPlaceholderHidden?: boolean;
  placeholder?: string;
  disable?: boolean;
};

const RenderItem = (item: any, value: any) => (
  <View
    style={[
      styles.dropdownItemContainer,
      item.value === value && styles.selectedDropdownItemContainer,
    ]}
  >
    <Text
      style={[
        styles.dropdownItem,
        ,
        item.value === value && styles.selectedDropdownItem,
      ]}
    >
      {item.label}
    </Text>
  </View>
);

const CustomDropdown = ({
  options,
  value,
  onChange,
  containerStyle,
  isPlaceholderHidden = false,
  placeholder = "Select",
  disable = false,
}: CustomDropdownProps) => (
  <Dropdown
    data={options}
    labelField="label"
    valueField="value"
    value={value}
    onChange={onChange}
    style={[styles.dropdown, containerStyle]}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    maxHeight={150}
    renderItem={(item: any) => RenderItem(item, value)}
    placeholder={
      isPlaceholderHidden ? "" : placeholder ? placeholder : "Select"
    }
    disable={disable}
  />
);

export default CustomDropdown;
