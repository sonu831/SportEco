import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { DATE_OPTIONS, MONTH_OPTIONS } from "../../constants/EditProfile";
import { RootStackScreenProps } from "../Navigation/types";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
import { StepsEnum } from "./config";
import { styles } from "./styles";
import useCreateProfileScreen from "./useCreateProfileScreen";
import { NameFields } from "./nameFields";
import { GenderField } from "./genderField";
import { ProfileImage } from "./ProfileImage/index.";
import { DOBField } from "./dobField";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Colors } from "../../constants/Colors";
import SelectUserTypes from "./selectUserTypes";

navigator.geolocation = require("@react-native-community/geolocation");

const SaveButton = ({ handleSave, currentStep }) => (
  <View
    style={[styles.fieldRow, styles.justifyCenter, styles.mv20, styles.footer]}
  >
    <TouchableOpacity
      style={[styles.nextBtn, styles.w100]}
      onPress={handleSave}
    >
      <Text style={styles.nextBtnText}>{currentStep == 6 ? "Finish" : "Next"}</Text>
    </TouchableOpacity>
  </View>
);

const EmailField = ({ email, updateState }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>'EmailField'</Text>
  </View>
);

const StateCityFields = ({
  countryStates,
  selectedState,
  citiesByState,
  selectedCity,
  updateState,
}) => (
  <View style={styles.py16}>
    <Text
      style={[
        styles.fieldRowLabel,
        { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
      ]}
    >
      Select Your City.
    </Text>
    <Text style={styles.fieldRowLabel}>
      Help us discover the sports around.
    </Text>
    <View style={styles.searchView}>
      <GooglePlacesAutocomplete
        placeholder="Search destination"
        fetchDetails={true}
        currentLocation={true}
        isRowScrollable={true}
        keepResultsAfterBlur={false}
        enablePoweredByContainer={false}
        styles={{
          textInputContainer: {
            marginTop: 0,
          },
          textInput: {
            height: 45,
            color: "black",
            fontSize: 16,
            backgroundColor: Colors.white,
            borderWidth: 0.5,
            borderColor: Colors.gray,
            borderRadius: 10,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
          listView: {
            position: "relative",
            zIndex: 3,
            marginTop: 0,
            padding: 0,
          },
          row: {
            backgroundColor: "#FFFFFF",
            height: 50,
            flexDirection: "row",
          },
          separator: {
            height: 0.5,
            backgroundColor: "#c8c7cc",
          },
          description: {},
          loader: {
            flexDirection: "row",
            justifyContent: "flex-end",
            height: 20,
          },
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyDFJlmj270Oz3P90ptUE-8mSFT2vKoV8NM",
          language: "en",
          components: "country:us",
        }}
      />
    </View>
  </View>
);

const RenderStep = ({ currentStep, ...props }) => {
  switch (currentStep) {
    case StepsEnum.NameDetails:
      return <NameFields {...props} />;
    case StepsEnum.Gender:
      return <GenderField {...props} />;
    case StepsEnum.DateOfBirth:
      return <DOBField {...props} />;
    case StepsEnum.SelectCity:
      return <StateCityFields {...props} />;
    case StepsEnum.ProfilePhoto:
      return <ProfileImage {...props} />;
    case StepsEnum.SelectUserType:
      return <SelectUserTypes {...props} />
    default:
      return null;
  }
};

const CreateProfileScreen = ({
  navigation,
}: RootStackScreenProps<"CreateProfile">) => {
  const { state, handleSave, handleGoBack, currentStep, updateState } =
    useCreateProfileScreen({ navigation });
  const {
    fName,
    lName,
    mName,
    email,
    dobDate,
    dobMonth,
    dobYear,
    role,
    gender,
    selectedCity,
    selectedState,
    image,
    idProof,
  } = state;

  const dateOptions = DATE_OPTIONS();
  const monthOptions = MONTH_OPTIONS();

  return (
    <SafeArea classNames={styles.safeView}>
      <View>
        <Header
          title="Create Profile"
          onBackPress={handleGoBack}
          rightText={`Step ${currentStep}/${StepsEnum.SelectUserType}`}
        />
        <RenderStep currentStep={currentStep} {...state} {...{ updateState }} />
      </View>
      <SaveButton handleSave={handleSave} currentStep={currentStep} />
    </SafeArea>
  );
};

export default CreateProfileScreen;
