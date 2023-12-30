import React from "react";
import { View } from "react-native";
import { TitleText, TextInput, SelectionComponent } from "../../components";
import { styles } from "./styles";
import { Colors } from "../../constants/Colors";

export const NameFields = ({ fName, lName, updateState }: any) => (
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
      style={{
        borderBottomWidth: 0,
        borderColor: "grey",
        backgroundColor: "white",
        color: Colors.black2,
      }}
      borderRadius={10}
      editable={true}
      label={"First Name"}
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
      style={{
        borderBottomWidth: 0,
        borderColor: "grey",
        backgroundColor: "white",
        color: Colors.black2,
      }}
      borderRadius={10}
      editable={true}
      label={"Last Name"}
    />
  </View>
);
