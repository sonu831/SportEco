import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import group902 from "../../assets/images/group902.png";
import group904 from "../../assets/images/group904.png";
import group905 from "../../assets/images/group905.png";
import group908 from "../../assets/images/group908.png";
import group907 from "../../assets/images/group907.png";
import group909 from "../../assets/images/group909.png";
import { findIndexByValue } from "../../utils/methods";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updatePlayerProfile } from "../../services/players";

const options = [
  { label: "Male", icon: "male" },
  { label: "Female", icon: "female-sharp" },
  { label: "Other", icon: "add" },
];

const initialAvatar: AvatarMap = {
  1: group902,
  2: group904,
  3: group905,
  4: group908,
  5: group907,
  6: group909,
};

export const useEditPlayer = ({
  route,
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "EditPlayerProfile">;
}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedOption, setSelectedOption] = React.useState(options[0].label);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [avatarImage, setAvatarImage] = React.useState();
  const [profilePic, setProfilePic] = React.useState();
  const [playerId, setPlayerId] = React.useState();
  const [isEdit, setIsEdit] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!route?.params?.data) return;
    const {
      avatarimage,
      first_name,
      last_name,
      gender,
      phonenumber,
      profile_pic,
      dbo,
      _id,
    } = route?.params?.data;
    const index = findIndexByValue(initialAvatar, avatarimage) ?? 2;
    setAvatarImage(initialAvatar[index]);
    setFirstName(first_name);
    setLastName(last_name);
    setDob(dbo);
    setPhoneNumber(phonenumber);
    setSelectedOption(gender);
    setProfilePic(profile_pic);
    setPlayerId(_id);
  }, []);

  const handleOptionPress = (option: any) => {
    setSelectedOption(option);
  };
  const handleConfirm = (date: any) => {
    setDatePickerVisibility(false);
    setSelectedDate(date);
    setDob(date ? date.toISOString().split("T")[0] : "");
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const editUpdateProfile = () => {
    if (isEdit) {
      const request = {
        first_name: firstName,
        last_name: lastName,
        dbo: {
          date: "27",
          month: "2",
          year: "1990",
        },
        gender: selectedOption,
        phonenumber: phoneNumber,
        avatarimage: avatarImage,
      };
      dispatch(updatePlayerProfile({ data: request, playerId: playerId })).then(
        (res) => {
          console.log("res", res);
          navigation.replace("PlayerProfile", { id: res?.payload?.data?._id });
        }
      );
    }
    setIsEdit(true);
  };

  return {
    firstName,
    lastName,
    dob,
    phoneNumber,
    selectedOption,
    isDatePickerVisible,
    selectedDate,
    avatarImage,
    profilePic,
    handleOptionPress,
    handleConfirm,
    showDatePicker,
    hideDatePicker,
    options,
    setFirstName,
    setLastName,
    setDob,
    setPhoneNumber,
    setSelectedOption,
    setIsEdit,
    isEdit,
    editUpdateProfile,
  };
};
