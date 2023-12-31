import React from "react";
import {
  GestureResponderEvent,
  OpaqueColorValue,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import MyText from "../MyText";

type ButtonProps = {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  icon?: keyof typeof Entypo.glyphMap;
  iconColor?: string | OpaqueColorValue | undefined;
  style?: StyleProp<ViewStyle>;
  type?: "submit" | "cancel";
  disabled?: boolean;
};

const Button = ({
  label,
  onPress,
  icon,
  style,
  iconColor,
  type = "submit",
  disabled,
}: ButtonProps) => {
  const isSubmitButton = type === "submit";

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        style,
        isSubmitButton ? styles.bgOrange : styles.bgWhite,
        disabled && { backgroundColor: "#d3d3d3", borderColor: "#d3d3d3" },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.flexRow}>
        {/* <Text
          style={[
            styles.btnText,
            isSubmitButton ? styles.textWhite : styles.textOrange,
          ]}
        >
          {label}
        </Text> */}
        <MyText
          text={label}
          style={[
            styles.btnText,
            isSubmitButton ? styles.textWhite : styles.textOrange,
          ]}
          fontFamily="SEMIBOLD"
        />
        {icon && (
          <Entypo name={icon} size={16} color={iconColor || Colors.white} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
