import React from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";
import { styles } from "./styles";

type TextFieldProps = {
  value: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  classNames?: StyleProp<TextStyle>;
  placeholder?: string | undefined;
  isMultiline?: boolean | undefined;
  isEditable?: boolean | undefined;
};

const TextField = ({
  value,
  onChangeText,
  classNames,
  placeholder,
  isMultiline,
  isEditable = true,
}: TextFieldProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.fieldInput, classNames]}
      placeholder={placeholder}
      multiline={isMultiline}
      editable={isEditable}
    />
  );
};

export default TextField;
