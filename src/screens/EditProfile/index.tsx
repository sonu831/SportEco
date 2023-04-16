import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
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
import CustomDropdown from "../../components/Dropdown";
import { RootStackScreenProps } from "../Navigation/types";
import ImagePicker from "../../components/ImagePicker";
import FilePicker from "../../components/FilePicker";
import SafeArea from "../../components/SafeArea";

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
  } = useEditProfile({ navigation, route });
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
        <View style={styles.containerView}>
          <View style={[styles.fieldRow, styles.py16]}>
            <Text style={styles.fieldRowLabel}>Photo</Text>
            <View style={styles.uploadImage}>
              {!!image ? (
                <Image source={{ uri: image }} style={styles.uploadedImage} />
              ) : (
                <ImagePicker currentImage={image} handleImage={uploadImage} />
              )}
            </View>
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>Name</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <View style={[styles.flex, styles.w195]}>
              <TextInput
                value={fName}
                onChangeText={(newName) =>
                  updateState({ key: "fName", value: newName })
                }
                style={[styles.fieldInput, styles.mr10]}
                placeholder="First Name"
              />
              <TextInput
                value={lName}
                onChangeText={(newName) =>
                  updateState({ key: "lName", value: newName })
                }
                style={styles.fieldInput}
                placeholder="Last Name"
              />
            </View>
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <Text style={styles.fieldRowLabel}>
              {isAddPlayer ? "Phone Number" : `Middle Name`}
            </Text>
            <TextInput
              value={mName}
              onChangeText={(newName) =>
                updateState({ key: "mName", value: newName })
              }
              style={[styles.fieldInput, styles.w195]}
              placeholder="Middle Name"
            />
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>E-mail ID</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <TextInput
              value={email}
              onChangeText={(newName) =>
                updateState({ key: "email", value: newName })
              }
              style={[styles.fieldInput, styles.w195]}
              placeholder="E-mail ID"
            />
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>Date of Brith</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <View style={[styles.flex, styles.w195]}>
              <View style={styles.mr10}>
                <CustomDropdown
                  options={dateOptions}
                  value={dobDate}
                  onChange={(item) => {
                    updateState({ key: "dobDate", value: item.value });
                  }}
                  containerStyle={styles.w60}
                  isPlaceholderHidden={true}
                />
              </View>
              <View style={styles.mr10}>
                <CustomDropdown
                  options={monthOptions}
                  value={dobMonth}
                  onChange={(item) => {
                    updateState({ key: "dobMonth", value: item.value });
                  }}
                  containerStyle={styles.w60}
                  isPlaceholderHidden={true}
                />
              </View>
              <TextInput
                value={dobYear}
                onChangeText={(newName) =>
                  updateState({ key: "dobYear", value: newName })
                }
                style={[styles.fieldInput, styles.w60]}
              />
            </View>
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>Gender</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <CustomDropdown
              options={GENDER_OPTIONS}
              value={gender}
              onChange={(item) => {
                updateState({ key: "gender", value: item.value });
              }}
            />
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>State</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <CustomDropdown
              options={countryStates}
              value={selectedState}
              onChange={(item) => {
                updateState({ key: "selectedState", value: item.value });
              }}
            />
          </View>
          {citiesByState?.length > 0 && (
            <View style={[styles.fieldRow, styles.py16]}>
              <View style={styles.flex}>
                <Text style={styles.fieldRowLabel}>City</Text>
                <Text style={styles.required}>*</Text>
              </View>
              <CustomDropdown
                options={citiesByState}
                value={selectedCity}
                onChange={(item) => {
                  updateState({ key: "selectedCity", value: item.value });
                }}
              />
            </View>
          )}
          {!isAddPlayer && (
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
          )}
          <View style={[styles.fieldRow, styles.justifyCenter, styles.mv20]}>
            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default EditProfile;
