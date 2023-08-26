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
import { ProfileImage } from "./profileImage";
import { DOBField } from "./dobField";

const SaveButton = ({ handleSave }) => (
  <View
    style={[styles.fieldRow, styles.justifyCenter, styles.mv20, styles.footer]}
  >
    <TouchableOpacity
      style={[styles.saveBtn, styles.w100]}
      onPress={handleSave}
    >
      <Text style={styles.saveBtnText}>Save</Text>
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
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>StateCityFields</Text>
  </View>
);

const RenderStep = ({ currentStep, ...props }) => {
  console.log("currentStep RenderStep", currentStep);
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
          rightText={`Step ${currentStep}/${StepsEnum.ProfilePhoto}`}
        />
        <RenderStep currentStep={currentStep} {...state} {...{ updateState }} />
      </View>
      <SaveButton handleSave={handleSave} />
    </SafeArea>
  );
};

export default CreateProfileScreen;
