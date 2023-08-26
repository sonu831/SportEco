import React from "react";
import { View } from "react-native";
import { TitleText, SelectionComponent } from "../../components";
import { styles } from "./styles";

const options = [
  { label: "Male", icon: "male" },
  { label: "Female", icon: "female-sharp" },
];

export const GenderField = ({ updateState }) => {
  return (
    <View style={[styles.fieldColumn]}>
      <TitleText
        text={`Select Your Gender.`}
        subtext="This helps us personalize your experience"
        style={styles.pb30}
      />
      <SelectionComponent
        options={options}
        onSelect={(gender) => updateState({ key: "gender", value: gender })}
      />
    </View>
  );
};
