import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GestureResponderEvent } from "react-native";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";
import { PlayerDetails } from "../../../interface/player";

export type HandleDeletePlayerFunction = (event: GestureResponderEvent) => void;

export type InitialState = {
  showConfirmation: boolean;
  PlayerDetails: PlayerDetails;
  isEdit: boolean;
  showDatePicker: false;
};

export type PlayerProfileManagerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.PlayerProfileManager
>;

export type PlayerProfileManagerRouteProp = RouteProp<
  RootStackParamList,
  ScreensName.PlayerProfileManager
>;
