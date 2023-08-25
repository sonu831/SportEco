import React from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../../constants/Colors";
import { DATE_OPTIONS, MONTH_OPTIONS } from "../../constants/EditProfile";
import { RootStackScreenProps } from "../Navigation/types";
import SafeArea from "../../components/SafeArea";
import { StepsEnum } from "./config";
import { styles } from "./styles";
import useCreateProfileScreen from "./useCreateProfileScreen";

const Header = ({ handleGoBack, isAddPlayer, isEdit }) => (
  <View style={[styles.containerView, styles.flex]}>
    <Pressable style={styles.backButton} onPress={handleGoBack}>
      <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
    </Pressable>
    <View>
      <Text style={styles.headingText}>
        {isAddPlayer
          ? `${isEdit ? "Edit" : "Add"} Player`
          : "Update your profile"}
      </Text>
    </View>
  </View>
);

const ProfileImage = ({ image, uploadImage }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>Photo</Text>
  </View>
);

const NameFields = ({ fName, lName, updateState }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>'NameFields'</Text>
  </View>
);

const EmailField = ({ email, updateState }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>'EmailField'</Text>
  </View>
);

const DOBField = ({ dobDate, dobMonth, dobYear, updateState }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>'DOBField'</Text>
  </View>
);

const GenderField = ({ gender, updateState }) => (
  <View style={[styles.fieldRow, styles.py16]}>
    <Text style={styles.fieldRowLabel}>'Gender Fields'</Text>
  </View>
);

const SaveButton = ({ handleSave }) => (
  <View style={[styles.fieldRow, styles.justifyCenter, styles.mv20]}>
    <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
      <Text style={styles.saveBtnText}>Save</Text>
    </TouchableOpacity>
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
  const { state, handleSave, handleGoBack, currentStep } =
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
      <ScrollView>
        <Header
          handleGoBack={handleGoBack}
          isAddPlayer={false}
          isEdit={false}
        />
        <RenderStep currentStep={currentStep} {...state} />
        <SaveButton handleSave={handleSave} />
      </ScrollView>
    </SafeArea>
  );
};

export default CreateProfileScreen;
