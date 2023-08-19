import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#3b5998', // Replace with your desired color
      borderRadius: 50, // Make it round
      flexDirection: 'row', // Arrange text and icon horizontally
      alignItems: 'center', // Center items vertically
      padding: 10,
    },
  });  

export const SocialButton = ({ title, onPress, icon }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        {icon && <FontAwesome name={icon} size={16} color="#fff" /> }
      </TouchableOpacity>
    );
  };
  