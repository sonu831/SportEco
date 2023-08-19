import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: "Avenir-Regular",
      lineHeight: 28,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 10,
    },
  });
  

export const TitleText = ({ text }) => {
    return <Text style={styles.h2}>{text}</Text>;
};