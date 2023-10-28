// components/Header/Header.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ColorValue,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import MyText from "../MyText"; // Please make sure this path is correct
import ScreensName from "../../constants/ScreenNames"; // Please make sure this path is correct
import { styles } from "./styles";
import useHeader from "./useHeader";

interface HeaderProps {
  title: string;
  hasActionIcon?: boolean;
  backgroundColor?: ColorValue;
  ActionIcon?: React.ReactNode;
  actionBtnPress?: () => void;
  isActionBtnDisabled?: boolean;
  screen?: keyof typeof ScreensName;
}

const Header: React.FC<HeaderProps> = ({
  title,
  hasActionIcon = false,
  backgroundColor = "white",
  ActionIcon = <AntDesign name="delete" size={20} color={"#fff"} />,
  actionBtnPress = () => {},
  isActionBtnDisabled = false,
  screen,
}) => {
  const { goBack } = useHeader();

  return (
    <View style={[styles.headerContainer, { backgroundColor }]}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => goBack(screen)}
      >
        <Feather name="arrow-left-circle" size={30} />
      </TouchableOpacity>
      <MyText text={title} fontsize={20} fontFamily="BOLD" />
      {hasActionIcon ? (
        <TouchableOpacity
          onPress={actionBtnPress}
          style={[
            styles.actionButton,
            isActionBtnDisabled && styles.disabledButton,
          ]}
          disabled={isActionBtnDisabled}
        >
          {ActionIcon}
        </TouchableOpacity>
      ) : (
        <Text style={styles.placeholderText}>h</Text>
      )}
    </View>
  );
};

export default Header;
