import { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";

const useUpdateProfile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, ScreensName.UpdatePlayerProfile>>(); // adjust "BatchInfo" to your specific route name

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const options = [
    { label: "Male", icon: "male" },
    { label: "Female", icon: "female-sharp" },
    { label: "Other", icon: "add" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const gotoPlayerProfile = () => {
    navigation.navigate("PlayerProfile");
  };

  return {
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
  };
};

export default useUpdateProfile;
