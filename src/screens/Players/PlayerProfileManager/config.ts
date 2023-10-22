import { GestureResponderEvent } from "react-native";

export interface PlayerData {
  __v: number;
  _id: string;
  account_createdAt: string;
  avatarimage: number;
  coach_id: string;
  dbo: {
    date: string;
    month: string;
    year: string;
  };
  first_name: string;
  gender: string;
  last_name: string;
  phonenumber: string;
  profile_pic: string | null; // Change this to the actual type of profile_pic
}
export type HandleDeletePlayerFunction = (event: GestureResponderEvent) => void;

export type InitialState = {
  showConfirmation: boolean;
  playerList: any[];
};

export interface PlayerProfileState {
  playerId: string;
  firstName: string;
  lastName: string;
  dob: {
    date: string;
    month: string;
    year: string;
  };
  phoneNumber: string;
  selectedOption: string;
  isDatePickerVisible: boolean;
  selectedDate: Date;
  avatarImage: string;
  profilePic: string;
}
