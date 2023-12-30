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
      <View style={styles.row}>
        {options.slice(0, 2).map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option.label)}
            style={styles.optionContainer}
          >
            <View style={[
              styles.option,
              selectedOption === option.label && styles.selectedOption,
            ]}>
              <Ionicons
                name={option.icon}
                size={100}
                color={selectedOption === option.label ? "#000" : "#d3d3d3"}
              />
              <Text style={[styles.optionText, selectedOption === option.label ? {color: "#000"} : {color: "#d3d3d3"}]}>{option.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {options.slice(2).map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option.label)}
            style={styles.optionContainer}
          >
            <View style={[
              styles.option,
              {    paddingHorizontal: 0, width: '94%'},
              selectedOption === option.label && styles.selectedOption,
            ]}>
              <Ionicons
                name={option.icon}
                size={100}
                color={selectedOption === option.label ? "#000" : "#d3d3d3"}
              />
              <Text style={[styles.optionText, selectedOption === option.label ? {color: "#000"} : {color: "#d3d3d3"}]}>{option.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  optionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  option: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: '90%',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: "#000",
  },
  optionText: {
    padding: 10,
    textAlign: "center",
    color: "#333",
    fontWeight: '600',
  },
});
