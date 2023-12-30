import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Colors } from "../../constants/Colors";

export const TextInputComponent = ({
  placeholder,
  value,
  onChangeText,
  style = {},
  editable,
  borderRadius = 5,
  label,
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 15,
    },
    input: {
      borderColor: Colors.gray,
      borderWidth: 1,
      borderRadius: borderRadius,
      padding: 10,
      paddingLeft: 15,
      color: Colors.black2,
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={style || styles.input}
        editable={editable}
        mode="outlined"
        activeOutlineColor="grey"
        placeholderTextColor={"#000"}
        label={label}
      />
    </View>
  );
};