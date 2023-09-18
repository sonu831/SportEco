import { View, Text, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBox = () => {
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
            }}
        >
            <AntDesign name="search1" style={{ marginRight: 10 }} size={18} />
            <TextInput placeholder="Search" />
        </View>
    );
};

export default SearchBox;
