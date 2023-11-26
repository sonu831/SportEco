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
import { TouchableOpacity, View } from "react-native";
import Toast from "../../components/Toast";
import AddProgram from "../AddProgram";
import AddSession from "../AddSession";
import Events from "../Events";
import ProgramDetails from "../ProgramDetails";
import CalendarScreen from "../CalendarScreen";
import Loading from "../Loading";
import CreateProfileScreen from "../CreateProfileScreen";
import MyAccount from "../MyAccount";
import ChangeAvatar from "../ChangeAvatar";
import Notifications from "../Notifications/Notifications";
import Players from "../Players";
import Batches from "../Batches";
import BatchInfo from "../Batches/BatchInfo";
import CreateBatch from "../Batches/CreateBatch";
import EditBatchInfo from "../Batches/EditBatchInfo";
import AddRemovePlayer from "../Batches/AddRemovePlayer";
import PlayerProfile from "../Players/PlayerProfile";
import Venues from "../Venue";
import VenueDetails from "../Venue/VenueDetails/VenueDetails";
import ChooseLocation from "../Venue/ChooseLocation";
import CreateVenue from "../Venue/CreateVenue";
import { SafeAreaView } from "react-native-safe-area-context";
import Programs from "../Programs";
import CreatePrograms from "../Programs/CreatePrograms";
import CreateSession from "../Programs/CreateSession";
import ProgramInfo from "../Programs/ProgramInfo";
import SessionDetails from "../Programs/SessionDetails/SessionDetails";
import EditSession from "../Programs/EditSession/EditSession";
import PlayerProfileManager from "../Players/PlayerProfileManager";
import NetInfo from "@react-native-community/netinfo";
import MyText from "../../components/MyText";
import { Colors } from "../../constants/Colors";
import EditProgram from "../Programs/EditProgram";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { isLoading, appReady, isAccountVerified, isLoginVerified } =
    useNavigation();
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleTryAgain = async () => {
    try {
      // Check the network status again
      const netInfoState = await NetInfo.fetch();
      if (netInfoState.isConnected) {
        // Internet connection is available, you can perform necessary actions here.
        // For example, you might want to re-fetch data, reload components, etc.
        // For demonstration, let's just reload the entire app.
        window.location.reload();
      } else {
        // Internet connection is still not available.
        // You can show a message to the user or perform further actions as needed.
        console.log("Still no internet connection. Please check your network.");
      }
    } catch (error) {
      // Handle errors if any occurred during the process.
      console.error(
        "Error occurred while checking internet connection:",
        error
      );
    }
  };

  if (!appReady) return <View />;

  // If there's no internet connection, display a message
  if (!isConnected) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MyText text="Could not connect to the internet." />
        <MyText text="Please check your network." />
        <TouchableOpacity onPress={handleTryAgain}>
          <MyText
            text="Try Again"
            style={{ marginTop: 10 }}
            fontWeight="bold"
            color={Colors.orange}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <NavigationContainer>
          <Spinner visible={isLoading} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAccountVerified ? (
              <Stack.Group>
                <Stack.Screen
                  name="BottomTabNavigation"
                  component={BottomTabNavigation}
                />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Calendar" component={NotReady} />
                <Stack.Screen name="Message" component={NotReady} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="MyAccount" component={MyAccount} />
                <Stack.Screen name="ChangeAvatar" component={ChangeAvatar} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="CommonScreen" component={CommonScreen} />
                <Stack.Screen name="AddBatch" component={AddBatch} />
                <Stack.Screen name="AddProgram" component={AddProgram} />
                <Stack.Screen name="AddSession" component={AddSession} />
                <Stack.Screen name="BatchScreen" component={BatchScreen} />
                <Stack.Screen name="SelectPlayer" component={SelectPlayer} />

                <Stack.Screen name="Events" component={Events} />

                <Stack.Screen
                  name="ProgramDetails"
                  component={ProgramDetails}
                />
                <Stack.Screen
                  name="CalendarScreen"
                  component={CalendarScreen}
                />
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Notification" component={Notifications} />
                <Stack.Screen name="Batches" component={Batches} />
                <Stack.Screen name="BatchInfo" component={BatchInfo} />
                <Stack.Screen name="CreateBatch" component={CreateBatch} />
                <Stack.Screen name="EditBatchInfo" component={EditBatchInfo} />
                <Stack.Screen name="Venues" component={Venues} />
                <Stack.Screen name="VenueDetails" component={VenueDetails} />
                <Stack.Screen name="CreateVenue" component={CreateVenue} />
                <Stack.Screen name="Programs" component={Programs} />
                <Stack.Screen
                  name="CreatePrograms"
                  component={CreatePrograms}
                />
                <Stack.Screen name="EditProgram" component={EditProgram} />
                <Stack.Screen name="CreateSession" component={CreateSession} />
                <Stack.Screen name="ProgramInfo" component={ProgramInfo} />
                <Stack.Screen
                  name="SessionDetails"
                  component={SessionDetails}
                />
                <Stack.Screen name="EditSession" component={EditSession} />
                <Stack.Screen
                  name="CreateProfile"
                  component={CreateProfileScreen}
                />
                <Stack.Screen name="Players" component={Players} />
                <Stack.Screen
                  name="PlayerProfileManager"
                  component={PlayerProfileManager}
                />
                <Stack.Screen
                  name="AddRemovePlayer"
                  component={AddRemovePlayer}
                />
                <Stack.Screen name="PlayerProfile" component={PlayerProfile} />
                <Stack.Screen
                  name="ChooseLocation"
                  component={ChooseLocation}
                />
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
          {/* {!!isAccountVerified && !isLoginVerified && <BottomTabNavigation />} */}
        </NavigationContainer>
        <Toast />
      </SafeAreaView>
    </>
  );
};

export default Navigation;
