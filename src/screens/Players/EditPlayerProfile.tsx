import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/MyHeader";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import MyText from "../../components/MyText";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  CenteredLineWithText,
  PhoneNumberInput,
  SelectionComponent,
} from "../../components";
import { Colors } from "../../constants/Colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AvatarImage from "../../components/AvatarImage";
import { useEditPlayer } from "./useEditPlayer";

const EditPlayerProfile = ({ navigation, route }) => {
  // const gotoUpdatePlayerProfile = () =>
  //   navigation.replace("UpdatePlayerProfile");

  const {
    firstName,
    lastName,
    dob,
    phoneNumber,
    selectedOption,
    isDatePickerVisible,
    selectedDate,
    handleOptionPress,
    handleConfirm,
    avatarImage,
    profilePic,
    showDatePicker,
    hideDatePicker,
    setFirstName,
    setLastName,
    setDob,
    setPhoneNumber,
    setSelectedOption,
    options,
    isEdit,
    editUpdateProfile,
  } = useEditPlayer({
    navigation,
    route,
  });

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header
          title={isEdit ? "Update Player" : "Edit Player"}
          hasActionIcon
          actionBtnPress={editUpdateProfile}
          ActionIcon={
            <Feather
              name={isEdit ? "check" : "edit"}
              size={18}
              color={"#fff"}
            />
          }
          backgroundColor={"#FBF1D8"}
        />
        <View
          style={{
            backgroundColor: "#FBF1D8",
            padding: 25,
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            alignItems: "center",
          }}
        >
          <AvatarImage
            imageUrl={profilePic}
            placeholderImage={avatarImage}
            resizeMode="cover"
          />
          {/* <Image
            source={require("../../assets/images/group904.png")}
            style={{
              alignSelf: "center",
              borderWidth: 2,
              borderColor: Colors.darkslategray,
              borderRadius: 100,
            }}
          /> */}
        </View>
        <View style={styles.mainView}>
          <TextInput
            mode="outlined"
            label="First Name"
            placeholder="First Name"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <View style={{ height: "3%" }} />
          <TextInput
            mode="outlined"
            label="Last Name"
            placeholder="Last Name"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <View style={{ height: "3%" }} />
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            onChangePhoneNumber={(phone: string) => {
              setPhoneNumber(phone);
            }}
            inputContainerWidth={"73%"}
          />
          <View style={{ height: "3%" }} />
          <TextInput
            mode="outlined"
            label="Date of Birth"
            placeholder="Date of Birth"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
            onChangeText={(text) => setDob(text)}
            onPressIn={showDatePicker}
          />
          <CenteredLineWithText lineText="Gender" />
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {options.map((option, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => handleOptionPress(option.label)}
                  style={[
                    styles.option,
                    selectedOption === option.label && styles.selectedOption,
                  ]}
                >
                  <Ionicons
                    name={option.icon}
                    size={50}
                    color={
                      selectedOption === option.label
                        ? Colors.darkslategray
                        : Colors.gray
                    }
                  />
                  <MyText
                    text={option.label}
                    center={true}
                    color={
                      selectedOption === option.label
                        ? Colors.darkslategray
                        : Colors.gray
                    }
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selectedDate}
      />
    </React.Fragment>
  );
};
export default EditPlayerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    padding: 20,
  },
  option: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
  },
  selectedOption: {
    borderColor: "#000",
  },
});
