import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { styles } from "./styles";
import headerEdit from "../../assets/images/header-edit.png";
import headerCheck from "../../assets/images/header-check.png";

type HeaderProps = {
  title: string;
  rightText?: string;
  onBackPress: () => void;
  onEditModeClick?: () => void;
  isEditProfile?: boolean;
  isEdit?: boolean;
};

const Header: FC<HeaderProps> = ({
  title,
  rightText,
  onBackPress,
  isEditProfile,
  isEdit,
  onEditModeClick,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <EvilIcons name="arrow-left" style={styles.backBtn} size={50} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={rightText ? styles.rightContainer : styles.leftContainer}>
        {rightText && <Text style={styles.rightTextStyle}>{rightText}</Text>}
        {isEditProfile && (
          <TouchableOpacity onPress={onEditModeClick}>
            <Image source={isEdit ? headerCheck : headerEdit} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
