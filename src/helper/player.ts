import { genderOptions } from "../constants/players";
import { CustomDate } from "../interface";
import { PlayerDetails } from "../interface/player";
import { convertToCustomDateObject } from "./dateTimeConversion";

export const mapResponseToPlayerData = (response: any): PlayerDetails => {
  const profilePic = response.profile_pic?.filedata
    ? `data:image/png;base64,${response.profile_pic.filedata}`
    : response.profile_pic || "";
  return {
    playerId: response._id || "",
    firstName: response.first_name || "",
    lastName: response.last_name || "",
    dob: {
      date: response.dbo?.date || "",
      month: response.dbo?.month || "",
      year: response.dbo?.year || "",
    } as CustomDate,
    phoneNumber: response.phonenumber || "",
    selectedOption: response.gender || "",
    isDatePickerVisible: false,
    selectedDate: new Date(),
    avatarImage: response.avatarimage?.toString() || "",
    profilePic: profilePic || null,
  };
};

export const initializePlayer = (): PlayerDetails => {
  return {
    playerId: "",
    firstName: "",
    lastName: "",
    dob: convertToCustomDateObject(new Date()),
    phoneNumber: "",
    isDatePickerVisible: false,
    selectedOption: genderOptions.length > 0 ? genderOptions[0].label : "",
    selectedDate: new Date(),
    avatarImage: "",
    profilePic: "",
  };
};
