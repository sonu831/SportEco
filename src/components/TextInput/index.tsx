import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, View, StyleProp, TextStyle } from "react-native";

type TextInputComponentProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  editable?: boolean;
};

export const TextInputComponent: React.FC<TextInputComponentProps> = ({
  placeholder,
  value,
  onChangeText,
  style,
  editable = false,
}) => {
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
