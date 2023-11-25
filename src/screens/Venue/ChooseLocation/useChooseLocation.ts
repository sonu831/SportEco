import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

import { AppDispatch } from "../../../store";
import { UpdateStateRequest } from "../../../types/UpdateState";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";

export interface Address {
  city?: string;
  country?: string;
  district?: string | null;
  isoCountryCode?: string;
  name?: string;
  postalCode?: string;
  region?: string;
  street?: string;
  streetNumber?: string;
  subregion?: string;
  timezone?: string | null;
}

interface LocationState {
  showConfirmation: boolean;
  venueName: string;
  sport: string;
  courtName: string;
  venueDescription: string;
  image: string;
  currentRegion: LocationObject | null;
  address: Address;
}

export interface LocationObject {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const defaultRegion = {
  latitude: 28.6139,
  longitude: 77.2090,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const useChooseLocation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, ScreensName.ChooseLocation>>();
  const dispatch = useDispatch<AppDispatch>();

  const [state, setState] = useState<Partial<LocationState>>({
    showConfirmation: false,
    currentRegion: null,
    address: {
      name: "",
      subregion: "The Majestine Sports",
      street: "HSR Layout",
    },
  });

  const { currentRegion, address } = state;

  const updateState = (request: UpdateStateRequest<keyof LocationState>) => {
    Array.isArray(request)
      ? request.forEach(({ key, value }) =>
          setState((prevState) => ({ ...prevState, [key]: value }))
        )
      : setState((prevState) => ({
          ...prevState,
          [request.key]: request.value,
        }));
  };

  const handleChange = (key: keyof LocationState, value: any) => {
    key && updateState({ key, value });
  };

  const handleConfirmLocation = () => {
    /* implementation */
    handleGoBack();
  };
  const handleGoBack = () => navigation.goBack();
  const goToVenueLists = () => navigation.navigate(ScreensName.Venues);
  const goToAddVenue = () =>
    navigation.navigate(ScreensName.AddVenue, {
      address,
    });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Location access denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const distance = 1; // distance in kilometers you want to display from the center

      const latitudeDelta = distance / 10;
      const longitudeDelta =
        latitudeDelta * Math.cos((location.coords.latitude * Math.PI) / 10);

      updateState({
        key: "currentRegion",
        value: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
      });

      // Reverse Geocoding to get the address
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      if (address.length > 0) {
        console.log("Address:", address[0]);
        updateState({
          key: "address",
          value: address[0],
        });
        // You can update the state or perform other actions with the address here
      }
    })();
  }, []);

  return {
    markerCoordinates: currentRegion || defaultRegion,
    route,
    handleChange,
    handleConfirmLocation,
    handleGoBack,
    goToAddVenue,
    goToVenueLists,
    ...state,
  };
};

export default useChooseLocation;
