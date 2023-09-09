import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CenteredLineWithText = ({ lineText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{lineText}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    marginHorizontal: 15,
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 10, // Adjust the spacing as needed
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10, // Adjust the spacing as needed
  },
});