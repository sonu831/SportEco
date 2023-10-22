import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../../components/MyHeader";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import MyText from "../../../components/MyText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CenteredLineWithText, PhoneNumberInput } from "../../../components";
import { Colors } from "../../../constants/Colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import usePlayerProfileManager from "./usePlayerProfileManager";
import { styles } from "./styles";
import group10 from "../../../assets/images/group904.png";
import AvatarImage from "../../../components/AvatarImage";
import ImagePicker from "../../../components/ImagePicker";
import headerEdit from "../../../assets/images/header-edit.png";

const PlayerProfileManager = ({ navigation, route }) => {
  const {
    options,
    setPlayerDetailsState,
    playerDetailsState,
    handlePlayer,
    handleOptionPress,
    handleToggleDatePicker,
    handleDOBConfirm,
    handleUploadImage,
    isEdit,
  } = usePlayerProfileManager({ navigation, route });

  const {
    firstName,
    lastName,
    selectedDate,
    selectedOption,
    phoneNumber,
    isDatePickerVisible,
    profilePic,
    avatarImage,
  } = playerDetailsState;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header
          title={isEdit ? "Edit Player" : "Create Player"}
          hasActionIcon
          actionBtnPress={handlePlayer}
          ActionIcon={<Feather name="check" size={18} color={"#fff"} />}
          backgroundColor={"#E8E8E8"}
          isActionBtnDisabled={false}
        />
        <View style={styles.headerBG}>
          <View style={styles.avatarImage}>
            <AvatarImage
              imageUrl={profilePic || avatarImage}
              placeholderImage={group10}
              resizeMode="cover"
              isEdit={true}
            />
          </View>

          <View style={styles.avatarImageEditIcon}>
            <ImagePicker
              isChooseAvatar={false}
              handleImage={handleUploadImage}
              icon={headerEdit}
              showAvatar={false}
            />
          </View>
        </View>
        <View style={styles.mainView}>
          <TextInput
            mode="outlined"
            label="First Name"
            placeholder="First Name"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={firstName}
            onChangeText={(text) =>
              setPlayerDetailsState({ ...playerDetailsState, firstName: text })
            }
          />
          <View style={{ height: "3%" }} />
          <TextInput
            mode="outlined"
            label="Last Name"
            placeholder="Last Name"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={lastName}
            onChangeText={(text) =>
              setPlayerDetailsState({ ...playerDetailsState, lastName: text })
            }
          />
          <View style={{ height: "4%" }} />
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            onChangePhoneNumber={(phone: string) => {
              setPlayerDetailsState({
                ...playerDetailsState,
                phoneNumber: phone,
              });
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
            onChangeText={(text) =>
              setPlayerDetailsState({ ...playerDetailsState, dob: text })
            }
            onPressIn={handleToggleDatePicker}
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
        onConfirm={handleDOBConfirm}
        onCancel={handleToggleDatePicker}
        date={selectedDate}
      />
    </React.Fragment>
  );
};

export default PlayerProfileManager;
