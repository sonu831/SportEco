import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IErrorComponentProps } from "../config";
import { styles } from "./styles";

const ErrorComponent: React.FC<IErrorComponentProps> = ({ error, onRetry }) => {
  const [showStack, setStackShow] = useState<boolean>(false);
  const handleOnClickStack = () => {
    setStackShow(!showStack);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Message- {error.message}</Text>
      <TouchableOpacity style={styles.stackButton} onPress={handleOnClickStack}>
        {showStack ? (
          <Text>Stack- {error.stack}</Text>
        ) : (
          <Text>click me For Stack</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorComponent;
