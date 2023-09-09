import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3b5998", // Replace with your desired color
    borderRadius: 50, // Make it round
    flexDirection: "row", // Arrange text and icon horizontally
    alignItems: "center", // Center items vertically
    padding: 10,
  },
});

interface SocialButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  icon?: string; // This assumes FontAwesome supports string for the "name" prop.
}

export const SocialButton: FC<SocialButtonProps> = ({
  title,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {icon && <FontAwesome name={icon as any} size={16} color="#fff" />}
    </TouchableOpacity>
  );
};
