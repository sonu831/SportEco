import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Colors } from "../../constants/Colors";

const Header = ({ title, rightText, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <EvilIcons name="arrow-left" size={50} color={Colors.darkGray} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.rightTextStyle}>{rightText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightTextStyle: {
    color: "#F1592A",
  },
});

export default Header;
