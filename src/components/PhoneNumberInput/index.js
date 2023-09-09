import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";

export const PhoneNumberInput = ({
  phoneNumber,
  onChangePhoneNumber,
  isEditProfile,
  editable = true,
}) => {
  const [countryCode, setCountryCode] = useState("IN"); // Store the selected country code
  const [countryCodeInput, setCountryCodeInput] = useState("91");

  const selectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountryCodeInput(country.callingCode[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryFlagContainer}>
        <CountryPicker
          withFilter
          withFlag
          withAlphaFilter
          withCallingCode
          onSelect={selectCountry}
          countryCode={countryCode}
        />
        <Entypo name={"chevron-down"} size={16} />
      </View>
      <View
        style={
          isEditProfile
            ? styles.inputContainerEditProfile
            : styles.inputContainer
        }
      >
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>{`+${
            countryCodeInput ?? "1"
          }`}</Text>
        </View>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          editable={editable}
        />
      </View>
    </View>
  );
};
