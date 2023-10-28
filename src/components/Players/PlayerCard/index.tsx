import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import MyText from "../../MyText";

const playerImage = require("../../../assets/images/group904.png"); // Image import moved to the top

const PlayerCard = ({
  playerName,
  lastName = "",
  isSelected,
  hasRemoveBtn,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderColor: isSelected ? "#27AE60" : "grey",
          borderWidth: isSelected ? 1.5 : 0.5,
        },
      ]}
    >
      <View style={styles.playerInfoContainer}>
        <Image source={playerImage} style={styles.playerImage} />
        <MyText
          text={playerName + (lastName ? ` ${lastName}` : "")}
          fontFamily="MEDIUM"
          fontsize={16}
          style={styles.playerText}
        />
      </View>
      {hasRemoveBtn ? (
        <Feather name="x-circle" size={24} color="grey" />
      ) : (
        <Ionicons
          name={isSelected ? "checkbox" : "square-outline"}
          color={isSelected ? "#27AE60" : "grey"}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};

export default PlayerCard;
