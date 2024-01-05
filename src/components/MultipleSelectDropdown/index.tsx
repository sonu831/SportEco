import React from "react";
import { View } from "react-native";
import MultiSelect from 'react-native-multiple-select';
import { Colors } from "../../constants/Colors";
import { styles } from "./styles";

type OptionType = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  options: OptionType[];
  selectedItems: any[];
  onChange: (item: any) => void;
  placeholder?: string;
  multiSelectRef?: any;
  searchInputPlaceholderText?: string;
};

const MultipleSelectDropdown = ({
  options,
  selectedItems,
  onChange,
  placeholder = "Select",
  multiSelectRef,
  searchInputPlaceholderText = "Search Items...",
}: CustomDropdownProps) => (
  <View style={{ marginBottom: -2, marginTop: 4 }}>
    <MultiSelect
      hideTags
      items={options}
      uniqueKey="label"
      ref={multiSelectRef}
      onSelectedItemsChange={onChange}
      selectedItems={selectedItems}
      selectText={placeholder}
      searchInputPlaceholderText={searchInputPlaceholderText}
      onChangeInput={(text) => console.log(text)}
      tagRemoveIconColor="#CCC"
      tagBorderColor={Colors.gray}
      tagTextColor='#000'
      selectedItemTextColor={Colors.gray}
      selectedItemIconColor={Colors.gray}
      itemTextColor="#000"
      displayKey="value"
      searchInputStyle={styles.searchInputStyle}
      hideSubmitButton={true}
      hideDropdown={true}
      styleIndicator={{ marginRight: -25 }}
      styleItemsContainer={styles.styleItemsContainer}
      styleRowList={{ padding: 2 }}
      styleMainWrapper={{ backgroundColor: 'transparent' }}
      styleTextDropdown={styles.styleTextDropdown}
      styleSelectorContainer={styles.styleSelectorContainer}
      styleTextDropdownSelected={styles.styleTextDropdownSelected}
      styleDropdownMenuSubsection={{ marginHorizontal: 14 }}
      styleDropdownMenu={styles.styleDropdownMenu}
      styleInputGroup={styles.styleInputGroup}
    />
    <View style={selectedItems.length ? { marginBottom: 12 } : {}}>
      {multiSelectRef.current && multiSelectRef.current.getSelectedItemsExt(selectedItems)}
    </View>
  </View>
);

export default MultipleSelectDropdown
