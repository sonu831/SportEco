import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { BottomTabBar } from "../../constants/BottomTabBar";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const BottomTabNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.tabBarStyle}>
      {BottomTabBar({ navigation }).map((tab, tabIndex) => {
        return (
          <TouchableOpacity key={tabIndex} onPress={tab.onPress}>
            <Image source={tab.tabBarIcon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabNavigation;
