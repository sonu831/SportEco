import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const ProfileImage = ({ image, uploadImage }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>Photo</Text>
  </View>
);
