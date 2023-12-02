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
import { Address, LocationObject } from "../types";

interface LocationState {
  showConfirmation: boolean;
  venueName: string;
  sport: string;
  courtName: string;
  venueDescription: string;
  image: string;
  currentRegion: LocationObject | null;
  markerCoordinates: LocationObject | null;
  address: Address;
  isRegionChange: boolean;
}

const defaultRegion = {
  latitude: 28.4595,
  longitude: 77.0266,
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
    currentRegion: defaultRegion,
    markerCoordinates: defaultRegion,
    isRegionChange: true,
    address: {
      name: "",
      subregion: "The Majestine Sports",
      street: "HSR Layout",
    },
  });

  const { currentRegion, address, markerCoordinates, isRegionChange } = state;

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
    goToAddVenue();
  };
  const handleGoBack = () => navigation.goBack();
  const goToVenueLists = () => navigation.navigate(ScreensName.Venues);
  const goToAddVenue = () =>
    navigation.navigate(ScreensName.CreateVenue, {
      address: address,
    });

  const onRegionChange = (region) => {
    if (!isRegionChange) return;
    console.log("region", region);
    updateState({
      key: "currentRegion",
      value: region,
    });
  };

  const handleOnDragStart = () => {
    updateState({
      key: "isRegionChange",
      value: false,
    });
  };

  const handleOnDragEnd = (pin) => {
    console.log("pin", pin);
    updateState({
      key: "markerCoordinates",
      value: pin,
    });
    updateState({
      key: "isRegionChange",
      value: true,
    });
  };

  useEffect(() => {
    let timeoutId;

    if (currentRegion) {
      timeoutId = setTimeout(() => {
        updateState({
          key: "markerCoordinates",
          value: {
            latitude: currentRegion.latitude,
            longitude: currentRegion.longitude,
            latitudeDelta: currentRegion.latitudeDelta,
            longitudeDelta: currentRegion.longitudeDelta,
          },
        });
      }, 500); // Delay of 1000 milliseconds (1 second)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentRegion]);

  useEffect(() => {
    const fetchAddress = async () => {
      if (markerCoordinates) {
        try {
          // Reverse Geocoding to get the address
          const address = await Location.reverseGeocodeAsync({
            latitude: markerCoordinates.latitude,
            longitude: markerCoordinates.longitude,
          });

          if (address.length > 0) {
            console.log("Address:", address[0]);
            let locationAddress: Address = {
              ...address[0],
              latitudelongitude: markerCoordinates,
            };

          
            updateState({
              key: "address",
              value: locationAddress,
            });
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          // Handle the error, e.g., set an error state or show a message
        }
      }
    };

    fetchAddress();
  }, [markerCoordinates]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Location access denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const distance = 5; // distance in kilometers you want to display from the center

      const latitudeDelta = distance / 180;
      const longitudeDelta =
        latitudeDelta * Math.cos((location.coords.latitude * Math.PI) / 10);

      updateState({
        key: "currentRegion",
        value: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta,
          longitudeDelta,
        },
      });
    })();
  }, []);

  return {
    currentRegion,
    markerCoordinates,
    route,
    onRegionChange,
    handleChange,
    handleConfirmLocation,
    handleGoBack,
    goToAddVenue,
    goToVenueLists,
    handleOnDragEnd,
    handleOnDragStart,
    ...state,
  };
};

export default useChooseLocation;
