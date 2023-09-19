import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import MyText from '../MyText';

export const CenteredLineWithText = ({ lineText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <MyText style={styles.text} text={lineText} fontFamily="REGULAR" />
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
    height: 0.8,
    backgroundColor: Colors.gray3,
    marginHorizontal: 10, // Adjust the spacing as needed
  },
  text: {
    fontSize: 15,
    marginHorizontal: 10, // Adjust the spacing as needed
  },
});