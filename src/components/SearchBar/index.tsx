import React from "react";
import { View, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./styles";
import { Colors } from "../../constants/Colors";

type SearchBarProps = {
  onChange: ((text: string) => void) | undefined;
};

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <View style={styles.searchSection}>
      <Feather
        name="search"
        size={24}
        color={Colors.gray}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={onChange}
        underlineColorAndroid="transparent"
        placeholderTextColor={Colors.gray}
      />
    </View>
  );
};

export default SearchBar;
