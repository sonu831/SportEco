import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const TextInputComponent = ({
  placeholder,
  value,
  onChangeText,
  style,
  editable,
  borderRadius = 5
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 15,
    },
    input: {
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: borderRadius,
      padding: 10,
      paddingLeft: 15
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
      />
    </View>
  );
};