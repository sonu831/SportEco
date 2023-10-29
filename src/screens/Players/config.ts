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

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreensName from "../../constants/ScreenNames";

export type RootStackParamList = {
  Players: { id?: string; isPlayerDeleted?: boolean };
  // Add other screens and their parameters here if necessary
  MyAccount: undefined; // If MyAccount doesn't require parameters
};

export type PlayersScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.Players
>;
export type PlayersScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreensName.Players
>;
