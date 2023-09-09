import React, { useState } from "react";

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
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

// assets
import curveBackground from "../../assets/images/curve.png"

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
  const goToAvatarScreen = () => navigation.navigate('ChangeAvatar')
  const [selectedUsers, setSelectedUsers] = useState(role);
  const SaveButton = ({ handleSave }) => (
    <View
      style={[
        styles.fieldRow,
        styles.justifyCenter,
        styles.saveBtn,
        styles.footer,
      ]}
    >
      <TouchableOpacity
        style={[styles.nextBtn, styles.w100]}
        onPress={handleSave}
      >
        <Text style={styles.nextBtnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
  const userTypes = [
    {
      id: 1,
      name: "Coach",
      img: require('../../assets/images/coach.png'),
      width: '43%'
    },
    {
      id: 2,
      name: "Player",
      img: require('../../assets/images/player.png'),
      width: '43%'
    },
    {
      id: 3,
      name: "Parent",
      img: require('../../assets/images/parent.png'),
      width: '43%'
    },
  ];
  const toggleUserType = (user) => {
    const index = selectedUsers.findIndex((e) => e.id === user.id);
    if (index > -1) {
      const updatedUsers = selectedUsers.filter((e) => e.id !== user.id);
      updateState({ key: "roles", values: updatedUsers });
      setSelectedUsers(updatedUsers);
    } else {
      const updatedUsers = [...selectedUsers, user];
      updateState({ key: "roles", values: updatedUsers });
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
          />
          <View style={styles.profileAvatarContainer}>
            {/* <ImageBackground source={curveBackground} style={styles.curveImageBg} resizeMode="stretch" /> */}
            <View style={styles.avatarImage}>
              <AvatarImage
                imageUrl={image}
                placeholderImage={avatarImage}
                resizeMode="cover"
                isEdit={isEdit}
              // onClick={handleUploadID}
              />
            </View>
          </View>
          {isEdit && <View style={{ position: 'absolute', bottom: 0, right: 0, left: 70, top: 130 }}>
            <ImagePicker isChooseAvatar={false} handleImage={() => { }} icon={headerEdit} showAvatar={goToAvatarScreen} />
          </View>}
          <View style={{ paddingHorizontal: 0 }}>
            <View style={[styles.fieldCol, styles.py16]}>
              <TextInputComponent
                value={fName}
                onChangeText={(newName) =>
                  updateState({ key: "fName", value: newName })
                }
                style={styles.fieldInput}
                placeholder="First Name"
                editable={isEdit}
              />
              <TextInputComponent
                value={lName}
                onChangeText={(newName) =>
                  updateState({ key: "lName", value: newName })
                }
                style={styles.fieldInput}
                placeholder="Last Name"
                editable={isEdit}
              />
            </View>
            <View style={[styles.fieldRow, styles.py16]}>
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
                onChange={(value: any) =>
                  updateState({
                    key: "dobDate",
                    value: moment(value),
                  })
                }
                dateBoxField
                disabled={isEdit}
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

            {/* {!isAddPlayer && (
              <View style={[styles.py16, styles.fieldColumn]}>
                <Text style={styles.fieldRowLabel}>I am a...</Text>
                <View style={[styles.fieldRow, styles.mt21]}>
                  {ROLE_OPTIONS.map((roleOption, i) => (
                    <TouchableOpacity
                      key={i}
                      style={[
                        styles.category,
                        i !== ROLE_OPTIONS.length - 1 && styles.mr27,
                        role.includes(roleOption) && styles.categorySelected,
                      ]}
                      onPress={() => {
                        if (role.includes(roleOption)) {
                          updateState({
                            key: "role",
                            value: role.filter((e) => e !== roleOption),
                          });
                        } else {
                          updateState({
                            key: "role",
                            value: [...role, roleOption],
                          });
                        }
                      }}
                    >
                      <Text
                        style={[
                          styles.textCapitalize,
                          role.includes(roleOption) &&
                            styles.categorySelectedText,
                        ]}
                      >
                        {roleOption}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity
                  style={[styles.alignEnd, styles.mt10]}
                  onPress={() =>
                    updateState({
                      key: "role",
                      value: ROLE_OPTIONS,
                    })
                  }
                >
                  <Text style={styles.selectAll}>Select All</Text>
                </TouchableOpacity>
              </View>
            )}
            {isAddPlayer && (
              <View style={[styles.flex, styles.py16, styles.px25]}>
                <View>
                  <View style={styles.flex}>
                    <Text style={styles.fieldRowLabel}>ID Proof</Text>
                    <Text style={styles.required}>*</Text>
                  </View>
                  <Text>{`(Aadhar Card)`}</Text>
                </View>

                <View style={styles.uploadIcon}>
                  {idProof?.mimeType ? (
                    <Image source={uploadSuccessIcon} />
                  ) : (
                    <FilePicker handleUpload={handleUploadID} />
                  )}
                </View>
              </View>
            )} */}
            <CenteredLineWithText lineText="My Profile" />
            <View style={{ flexDirection: "row", justifyContent: "center", paddingHorizontal: 30 }}>
              {userTypes.map((item) => (
                <UserTypes
                  key={item.id.toString()}
                  isCheck={selectedUsers.some((user) => user?.id === item?.id)}
                  width={'32%'}
                  height={120}
                  name={item.name}
                  image={item.img}
                  onPress={() => toggleUserType(item)}
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
