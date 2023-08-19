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
import Toast from "../../components/Toast";
import AddProgram from "../AddProgram";
import AddSession from "../AddSession";
import AddVenue from "../AddVenue";
import VenueDetail from "../VenueDetail";
import Events from "../Events";
import AddEvents from "../AddEvents";
import ProgramDetails from "../ProgramDetails";
import CalendarScreen from "../CalendarScreen";
import Loading from "../Loading";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { isLoading, appReady, isAccountVerified, isLoginVerified } =
    useNavigation();

  if (!appReady) return <View />;

  return (
    <>
      <NavigationContainer>
        <Spinner visible={isLoading} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAccountVerified ? (
            <Stack.Group>
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="Calendar" component={NotReady} />
              <Stack.Screen name="Message" component={NotReady} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="CommonScreen" component={CommonScreen} />
              <Stack.Screen name="AddBatch" component={AddBatch} />
              <Stack.Screen name="AddProgram" component={AddProgram} />
              <Stack.Screen name="AddSession" component={AddSession} />
              <Stack.Screen name="BatchScreen" component={BatchScreen} />
              <Stack.Screen name="SelectPlayer" component={SelectPlayer} />
              <Stack.Screen name="AddVenue" component={AddVenue} />
              <Stack.Screen name="VenueDetail" component={VenueDetail} />
              <Stack.Screen name="Events" component={Events} />
              <Stack.Screen name="AddEvents" component={AddEvents} />
              <Stack.Screen name="ProgramDetails" component={ProgramDetails} />
              <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
              <Stack.Screen name="Loading" component={Loading} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="Landing" component={LandingScreen} />
              <Stack.Screen
                name="Verification"
                component={VerificationScreen}
              />
              <Stack.Screen name="Loading" component={Loading} />
            </Stack.Group>
          )}
          <Stack.Screen name="Confirmation" component={Confirmation} />
        </Stack.Navigator>

        {!!isAccountVerified && !isLoginVerified && <BottomTabNavigation />}
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Navigation;
