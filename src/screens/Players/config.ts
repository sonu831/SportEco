import { GestureResponderEvent } from "react-native";

export type HandleDeletePlayerFunction = (event: GestureResponderEvent) => void;

export type InitialState = {
  showConfirmation: boolean;
  playerList: any[];
  isSearchEnable: boolean;
};

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreensName from "../../constants/ScreenNames";
import { RootStackParamList } from "../Navigation/types";

export type PlayersScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.Players
>;
export type PlayersScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreensName.Players
>;
