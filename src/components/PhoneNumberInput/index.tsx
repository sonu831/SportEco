import React, {useState} from 'react';
import {View, TextInput, Text, StyleProp, ViewStyle} from 'react-native';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';

type PhoneNumberInputProps = {
  phoneNumber: string;
  onChangePhoneNumber: (text: string) => void;
  isEditProfile?: boolean;
  editable?: boolean;
};

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  phoneNumber,
  onChangePhoneNumber,
  isEditProfile = false, // Assigning default value for optional prop
  editable = true,
}) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('IN'); // Store the selected country code
  const [countryCodeInput, setCountryCodeInput] = useState<string>('91');

  const selectCountry = (country: {
    cca2: CountryCode;
    callingCode: string[];
  }) => {
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
        <Entypo name={'chevron-down'} size={16} />
      </View>
      <View
        style={
          isEditProfile
            ? styles.inputContainerEditProfile
            : styles.inputContainer
        }>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>{`+${
            countryCodeInput ?? '1'
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
