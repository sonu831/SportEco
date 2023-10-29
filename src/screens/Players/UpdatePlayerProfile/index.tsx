import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../../components/MyHeader";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import MyText from "../../../components/MyText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CenteredLineWithText, PhoneNumberInput } from "../../../components";
import { Colors } from "../../../constants/Colors";
import useUpdateProfile from "./useUpdateProfile";
import { styles } from "./styles";
import group9 from "../../../assets/images/group904.png";

const UpdatePlayerProfile = ({ navigation }) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dob,
    setDob,
    phoneNumber,
    setPhoneNumber,
    selectedOption,
    setSelectedOption,
    handleOptionPress,
    gotoPlayerProfile,
    options,
  } = useUpdateProfile();

  return (
    <View style={styles.container}>
      <Header
        title="Update Player"
        hasActionIcon
        actionBtnPress={gotoPlayerProfile}
        ActionIcon={<Feather name="check" size={18} color={"#fff"} />}
        backgroundColor={"#FBF1D8"}
      />
      <View
        style={{
          backgroundColor: "#FBF1D8",
          padding: 25,
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
        }}
      >
        <Image
          source={group9}
          style={{
            alignSelf: "center",
            borderWidth: 2,
            borderColor: Colors.darkslategray,
            borderRadius: 100,
          }}
        />
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
        />
        <View style={{ height: "3%" }} />
        <TextInput
          mode="outlined"
          label="Date of Birth"
          placeholder="Date of Birth"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={dob}
          onChangeText={(text) => setDob(text)}
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
  );
};
export default UpdatePlayerProfile;
