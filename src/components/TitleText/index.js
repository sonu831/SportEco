import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MyText from "../MyText";

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    lineHeight: 28,
    marginTop: 30,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 15,
    color: "#888",
    fontFamily: 'BOLD'
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
      <MyText style={[styles.h2, center && { textAlign: "center" }]} text={text} fontFamily='BOLD' />
      {subtext && <MyText style={styles.subtext} text={subtext} />}
    </View>
  );
};
