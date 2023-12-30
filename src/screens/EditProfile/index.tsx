import React, { useState } from "react";

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import uploadSuccessIcon from "../../assets/images/upload-success.png";
import { Colors } from "../../constants/Colors";

import { styles } from "./styles";
import useEditProfile from "./useEditProfile";
import {
  DATE_OPTIONS,
  GENDER_OPTIONS,
  MONTH_OPTIONS,
  ROLE_OPTIONS,
} from "../../constants/EditProfile";
import Header from "../../components/Header";
import CustomDropdown from "../../components/Dropdown";
import { RootStackScreenProps } from "../Navigation/types";
import ImagePicker from "../../components/ImagePicker";
import FilePicker from "../../components/FilePicker";
import SafeArea from "../../components/SafeArea";
import AvatarImage from "../../components/AvatarImage";
import { TextInputComponent } from "../../components/TextInput";
import { CenteredLineWithText, PhoneNumberInput } from "../../components";
import DateTimePicker from "../../components/DateTimePicker";
import moment from "moment";
import UserTypes from "../../components/UserTypes";
import headerEdit from "../../assets/images/header-edit.png";
import { convertToDateObject } from "../../helper/dateTimeConversion";
// assets
import curveBackground from "../../assets/images/editProfileBG.png";
const EditProfile = ({
  navigation,
  route,
}: RootStackScreenProps<"EditProfile">) => {
  const {
    uploadImage,
    state,
    updateState,
    handleSave,
    response,
    handleGoBack,
    handleUploadID,
    isAddPlayer,
    isEdit,
    countryStates,
    citiesByState,
    avatarImage,
    toggleProfileEditMode,
    handleUploadImage,
  } = useEditProfile({ navigation, route });
  const {
    fName,
    lName,
    role,
    gender,
    selectedCity,
    selectedState,
    dobDate,
    image,
    idProof,
    phNum,
  } = state;

  const dateOptions = DATE_OPTIONS();
  const monthOptions = MONTH_OPTIONS();
  const goToAvatarScreen = () => navigation.navigate("ChangeAvatar");
  const [selectedUsers, setSelectedUsers] = useState(role);
  const SaveButton = ({ handleSave }) => (
    <View
      style={[
        styles.fieldRow,
        styles.justifyCenter,
        styles.saveBtn,
        styles.footer,
      ]}
    ></View>
  );
  const userTypes = [
    {
      id: 1,
      name: "Coach",
      img: require("../../assets/images/coach.png"),
      width: "43%",
    },
    {
      id: 2,
      name: "Player",
      img: require("../../assets/images/player.png"),
      width: "43%",
    },
    {
      id: 3,
      name: "Parent",
      img: require("../../assets/images/parent.png"),
      width: "43%",
    },
  ];

  const toggleUserType = (user) => {
    const index = selectedUsers.findIndex((e) => e.id === user.id);
    if (index > -1) {
      const updatedUsers = selectedUsers.filter((e) => e.id !== user.id);
      updateState({ key: "role", value: updatedUsers.map((a: any) => a.name) });
      setSelectedUsers(updatedUsers);
    } else {
      const updatedUsers = [...selectedUsers, user];
      updateState({ key: "role", value: updatedUsers.map((a: any) => a.name) });
      setSelectedUsers(updatedUsers);
    }
  };

  return (
    <SafeArea classNames={styles.safeView}>
      <ScrollView>
        <View style={styles.containerView}>
          <Header
            title={isEdit ? "Edit Profile" : "My Profile"}
            onBackPress={handleGoBack}
            isEditProfile
            onEditModeClick={toggleProfileEditMode}
            isEdit={isEdit}
            isMyAccount
          />
          <ImageBackground
            source={curveBackground}
            style={styles.curveImageBg}
            resizeMode="stretch"
          />
          <View style={styles.profileAvatarContainer}>
            {/* <ImageBackground source={curveBackground} style={styles.curveImageBg} resizeMode="stretch" /> */}
            <View style={styles.avatarImage}>
              <AvatarImage
                placeholderImage={avatarImage}
                imageUrl={state?.image ?? null}
                resizeMode="cover"
                isEdit={isEdit}
                // onClick={handleUploadID}
              />
            </View>
          </View>
          {isEdit && (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 70,
                top: 130,
              }}
            >
              <ImagePicker
                isChooseAvatar={false}
                handleImage={handleUploadImage}
                icon={headerEdit}
                showAvatar={goToAvatarScreen}
              />
            </View>
          )}

          {/* bottom form  */}
          <View style={{ paddingHorizontal: 0 }}>
            <View style={[styles.fieldCol, styles.py16]}>
              <TextInputComponent
                value={fName}
                onChangeText={(newName) =>
                  updateState({ key: "fName", value: newName })
                }
                label="First Name"
                placeholder="First Name"
                style={{backgroundColor: "white"}}
                editable={isEdit}
              />
              <TextInputComponent
                value={lName}
                onChangeText={(newName) =>
                  updateState({ key: "lName", value: newName })
                }
                label="Last Name"
                placeholder="Last Name"
                style={{backgroundColor: "white",marginTop: 5,}}
                editable={isEdit}
              />
            </View>
            <View style={[styles.fieldRow, {marginBottom: 5,}]}>
              <PhoneNumberInput
                phoneNumber={phNum}
                onChangePhoneNumber={(phone: string) => {
                  updateState({
                    key: "phNum",
                    value: phone,
                  });
                }}
                isEditProfile
                editable={isEdit}
              />
            </View>
            <View style={[styles.fieldRow, styles.py16]}>
              <DateTimePicker
                type="date"
                value={dobDate}
                onChange={(value: any) => {
                  updateState({
                    key: "dobDate",
                    value: moment(value),
                  });
                }}
                dateBoxField
                editable={isEdit}
                classNames={styles.containerView}
              />
            </View>
            <View style={[styles.fieldRow, styles.py16]}>
              <CustomDropdown
                placeholder="Gender"
                options={GENDER_OPTIONS}
                value={gender}
                onChange={(item) => {
                  updateState({ key: "gender", value: item.value });
                }}
                containerStyle={styles.genderDropdown}
                disable={!isEdit}
              />
            </View>
            <CenteredLineWithText lineText="My Profile" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingHorizontal: 40,
              }}
            >
              {userTypes.map((item) => (
                <UserTypes
                  key={item.id.toString()}
                  isCheck={
                    selectedUsers.length
                      ? selectedUsers.some((user) => user?.id === item?.id)
                      : role.some((r) => r === item.name)
                  }
                  width={"32%"}
                  height={120}
                  name={item.name}
                  image={item.img}
                  onPress={() => toggleUserType(item)}
                  isEdit={isEdit}
                />
              ))}
            </View>
          </View>
          <SaveButton handleSave={handleSave} />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default EditProfile;
