import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { Colors } from "../../constants/Colors";
import MyText from "../MyText";

export const PhoneNumberInput = ({
  phoneNumber,
  onChangePhoneNumber,
  isEditProfile,
  editable = true,
  inputContainerWidth = "62%",
}) => {
  const [countryCode, setCountryCode] = useState("IN"); // Store the selected country code
  const [countryCodeInput, setCountryCodeInput] = useState("91");

  const selectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountryCodeInput(country.callingCode[0]);
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.countryFlagContainer, isEditProfile && { height: 55 }]}
      >
        <CountryPicker
          withFilter
          withFlag
          withAlphaFilter
          withCallingCode
          onSelect={selectCountry}
          countryCode={countryCode}
          containerButtonStyle={{ paddingHorizontal: 5, }}
        />
        <Entypo
          name={"chevron-down"}
          size={16}
          color={Colors.gray}
          style={{ paddingRight: 15 }}
        />
      </View>
      <View
        style={
          isEditProfile
            ? styles.inputContainerEditProfile
            : {
              marginLeft: 10,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              width: inputContainerWidth,
              paddingLeft: 10,
            }
        }
      >
        <View style={styles.countryCodeContainer}>
          <MyText
            style={styles.countryCodeText}
            text={`+${countryCodeInput ?? "1"}`}
            fontFamily="MEDIUM"
          />
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
