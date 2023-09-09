import React from 'react';
import {
  GestureResponderEvent,
  OpaqueColorValue,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../constants/Colors';

type ButtonProps = {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  icon?: any;
  iconColor?: string | OpaqueColorValue | undefined;
  style?: StyleProp<ViewStyle>;
  type?: 'submit' | 'cancel';
};

const Button = ({
  label,
  onPress,
  icon,
  style,
  iconColor,
  type = 'submit',
}: ButtonProps) => {
  const isSubmitButton = type === 'submit';

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        style,
        isSubmitButton ? styles.bgOrange : styles.bgWhite,
      ]}
      onPress={onPress}>
      <View style={styles.flexRow}>
        <Text
          style={[
            styles.btnText,
            isSubmitButton ? styles.textWhite : styles.textOrange,
          ]}>
          {label}
        </Text>
        {icon && (
          <Entypo name={icon} size={16} color={iconColor || Colors.white} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
