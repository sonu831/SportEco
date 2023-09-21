import React from "react";
import { View } from "react-native";
import { TitleText, TextInput, SelectionComponent } from "../../components";
import { styles } from "./styles";

export const NameFields = ({ fName, lName, updateState }) => (
  <View style={[styles.fieldColumn]}>
    <TitleText
      text={`What's Your Name?`}
      subtext="Kick things off by creating a profile!"
      style={styles.pb30}
    />
    <TextInput
      placeholder="First Name"
      value={fName}
      onChangeText={(fName) =>
        updateState({
          key: "fName",
          value: fName,
        })
      }
      borderRadius={10}
    />
    <TextInput
      placeholder="Last Name"
      value={lName}
      onChangeText={(lName) =>
        updateState({
          key: "lName",
          value: lName,
        })
      }
      borderRadius={10}
    />
  </View>
);
