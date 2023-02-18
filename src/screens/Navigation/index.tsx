import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "../LandingScreen";
import VerificationScreen from "../VerificationScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import useNavigation from "./useNavigation";
import EditProfile from "../EditProfile";
import CommonScreen from "../CommonScreen";
import { RootStackParamList } from "./types";
import MainScreen from "../MainScreen";
import ProfileScreen from "../ProfilePage";
import Confirmation from "../Confirmation";
import Spinner from "react-native-loading-spinner-overlay";
import NotReady from "../NotReady";
import AddBatch from "../AddBatch";
import SelectPlayer from "../SelectPlayers";
import BatchScreen from "../BatchDetails";
import { View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { userData, isLoading, appReady, token, isAccountVerified } =
    useNavigation();

  if (!appReady) return <View />;

  return (
    <NavigationContainer>
      <Spinner visible={isLoading} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!!(token || isAccountVerified) ? (
          <Stack.Group>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Calendar" component={NotReady} />
            <Stack.Screen name="Message" component={NotReady} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="CommonScreen" component={CommonScreen} />
            <Stack.Screen name="AddBatch" component={AddBatch} />
            <Stack.Screen name="SelectPlayer" component={SelectPlayer} />
            <Stack.Screen name="BatchScreen" component={BatchScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
          </Stack.Group>
        )}
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>

      {!!(token || isAccountVerified) && <BottomTabNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
