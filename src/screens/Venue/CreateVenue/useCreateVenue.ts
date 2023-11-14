import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { UpdateStateRequest } from "../../../types/UpdateState";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";

type InitialState = {
  showConfirmation: boolean;
  venueName: "";
  sport: "";
  courtName: "";
  venueDescription: "";
  image: "";
};

const initialState = {
  showConfirmation: false,
};

const useCreateVenue = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, ScreensName.CreateVenue>>(); // Adjusted based on your context

  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const [showModal, setShowModal] = useState<boolean>(false);

  const updateState = (request: UpdateStateRequest<keyof InitialState>) => {
    if (Array.isArray(request)) {
      request.forEach(({ key, value }) =>
        setState((preState) => ({ ...preState, [key]: value }))
      );
    } else {
      const { key, value } = request;
      setState((preState) => ({ ...preState, [key]: value }));
    }
  };

  const handleImage = (image = null) => {
    updateState({
      key: "image",
      value: null,
    });
  };

  const pickImage = async (type: "camera" | "library") => {
    let result = null;
    const permission =
      type === "camera" ? Permissions.CAMERA : Permissions.MEDIA_LIBRARY;
    const { status } = await Permissions.askAsync(permission);
    if (status !== "granted") {
      Alert.alert(`${permission} permission not granted`);
      return;
    }

    if (type === "camera") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
      });
    }

    if (!!result?.assets?.length) {
      handleImage?.(result.assets[0].uri);
      setShowModal(false);
    }
  };

  const handleChange = (key, value) => {
    if (key)
      updateState({
        key,
        value,
      });
  };

  const handleGoBack = () => navigation.goBack();
  const goToVenueLists = () => navigation.navigate(ScreensName.Venues);
  const goToChooseLocation = () =>
    navigation.navigate(ScreensName.ChooseLocation);

  return {
    pickImage,
    route,
    handleGoBack,
    state,
    updateState,
    goToVenueLists,
    handleImage,
    goToChooseLocation,
    handleChange,
  };
};

export default useCreateVenue;
