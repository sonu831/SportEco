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
import { ProfileImage } from "../../components/ProfileImage";
import { DOBField } from "./dobField";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Colors } from "../../constants/Colors";
import SelectUserTypes from "./selectUserTypes";

//navigator.geolocation = require("@react-native-community/geolocation");

const SaveButton = ({ handleSave, currentStep, disabled = false }) => (
  <View
    style={[styles.fieldRow, styles.justifyCenter, styles.mv20, styles.footer]}
  >
    <TouchableOpacity
      style={[
        styles.nextBtn,
        styles.w100,
        disabled && { backgroundColor: "#d3d3d3" },
      ]}
      onPress={handleSave}
      disabled={disabled}
    >
      <Text style={styles.nextBtnText}>
        {currentStep == 6 ? "Finish" : "Next"}
      </Text>
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
}: any) => (
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
      Explore sports options around you!
    </Text>
    <View style={styles.searchView}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        currentLocation={true}
        currentLocationLabel="Auto-detect my location"
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
          updateState({
            key: "selectedCity",
            value: data.description,
          });
        }}
        query={{
          key: "AIzaSyDFJlmj270Oz3P90ptUE-8mSFT2vKoV8NM",
          language: "en",
          components: "country:in",
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
      return <SelectUserTypes {...props} />;
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

  const isDisabled = () => {
    switch (currentStep) {
      case StepsEnum.NameDetails:
        return !fName || !lName;
      case StepsEnum.Gender:
        return !gender;
      case StepsEnum.DateOfBirth:
        return !dobDate;
      case StepsEnum.SelectCity:
        return !selectedCity;
      case StepsEnum.ProfilePhoto:
        return !image;
      case StepsEnum.SelectUserType:
        return !role.length;
      default:
        return false;
    }
  };

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
      <SaveButton
        handleSave={handleSave}
        currentStep={currentStep}
        disabled={isDisabled()}
      />
    </SafeArea>
  );
};

export default CreateProfileScreen;
