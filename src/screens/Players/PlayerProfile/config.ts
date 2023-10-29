import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreensName from "../../../constants/ScreenNames";
import { RootStackParamList } from "../../Navigation/types";

export type PlayerProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.PlayerProfile
>;

export type PlayerProfileRouteProp = RouteProp<
  RootStackParamList,
  ScreensName.PlayerProfile
>;
