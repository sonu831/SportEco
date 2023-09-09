import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Avenir-Regular",
    lineHeight: 28,
    marginTop: 30,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    color: "#888",
  },
});

export const TitleText = ({
  center = false,
  text,
  subtext = "",
  style = {},
}) => {
  return (
    <View style={[style && style]}>
      <Text style={[styles.h2, center && { textAlign: "center" }]}>{text}</Text>
      {subtext && <Text style={styles.subtext}>{subtext}</Text>}
    </View>
  );
};
