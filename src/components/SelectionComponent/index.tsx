import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const SelectionComponent = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => handleOptionPress(option.label)}
            style={[
              styles.option,
              selectedOption === option.label && styles.selectedOption,
            ]}
          >
            <Ionicons name={option.icon} size={100} />
          </TouchableOpacity>
          <Text style={styles.optionText}>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  option: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
  },
  selectedOption: {
    borderColor: "#000",
  },
  optionText: {
    padding: 10,
    textAlign: "center",
    color: "#333",
  },
});
