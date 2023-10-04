import { View, Text, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";

const SearchBox = ({ onChange, style }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 15,
        ...style
      }}
    >
      <AntDesign name="search1" style={{ marginRight: 10 }} size={20} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.gray}
        onChangeText={onChange}
      />
    </View>
  );
};

export default SearchBox;
