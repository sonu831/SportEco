import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
//import * as Permissions from "expo-permissions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { UpdateStateRequest } from "../../../types/UpdateState";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";
import { Address, VenueRequest } from "../types";
import { addVenue, updateVenue } from "../../../services/venue";

type InitialState = {
  showConfirmation: boolean;
  venueName: string;
  sport: string;
  courtName: string;
  venueDescription: string;
  image: string;
  address: Address;
  id: string;
};

const initialState = {
  showConfirmation: false,
  address: null,
};

const useCreateVenue = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, ScreensName.CreateVenue>>(); // Adjusted based on your context

  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { address, venueName, venueDescription, courtName, sport, image, id } =
    state;

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
      value: image,
    });
  };

  // TOTFO: ---
  const pickImage = async (type: "camera" | "library") => {
    let result = null;
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    //  : ImagePicker.requestMediaLibraryPermissionsAsync();
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (!permission.granted && status !== "granted") {
      Alert.alert(`${permission} permission not granted`);
      return;
    } else {
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
  const goToVenueLists = (shouldRefresh = false) =>
    navigation.navigate(ScreensName.Venues, { shouldRefresh: shouldRefresh });
  const goToChooseLocation = (shouldRefresh = false) =>
    navigation.navigate(ScreensName.ChooseLocation);

  const handleVenueSubmit = useCallback(async () => {
    const formData = new FormData();

    formData.append("venue_name", venueName);
    formData.append("court_name", courtName);
    formData.append("sport", sport);
    formData.append("description", venueDescription);
    formData.append(
      "address",
      `${address.name || ""},${address.streetNumber || ""}`
    );
    formData.append("city", address.city);
    formData.append("state", address.region);
    formData.append(
      "latitudelongitude",
      JSON.stringify(address.latitudelongitude)
    );

    if (image) {
      const imagePayload: any = {
        uri: image,
        type: "image/jpeg",
        name: "profile.jpg",
      };
      formData.append("image", imagePayload);
    }
    try {
      const res = await dispatch(addVenue(formData));
      // Handle the response
      if (res.payload.data?._id) {
        goToVenueLists(true);
      }
    } catch (error) {
      // Handle errors
      console.error("Error submitting venue:", error);
    }
  }, [dispatch, venueName, courtName, sport, address, image]);

  const handleVenueUpdate = useCallback(async () => {
    const formData = new FormData();

    formData.append("venue_name", venueName);
    formData.append("court_name", courtName);
    formData.append("sport", sport);
    formData.append("description", venueDescription);
    formData.append(
      "address",
      `${address.name || ""},${address.streetNumber || ""}`
    );
    formData.append("city", address.city);
    formData.append("state", address.region);
    formData.append(
      "latitudelongitude",
      JSON.stringify(address.latitudelongitude)
    );

    if (image) {
      const imagePayload: any = {
        uri: image,
        type: "image/jpeg",
        name: "profile.jpg",
      };
      formData.append("images", imagePayload);
    }
    try {
      const res: any = await dispatch(updateVenue({ data: formData, id: id }));
      // Handle the response
      if (res.payload.success) {
        goToVenueLists(true);
      }
    } catch (error) {
      // Handle errors
      console.error("Error submitting venue:", error);
    }
  }, [dispatch, venueName, courtName, sport, address, image, id]);

  useEffect(() => {
    if (route?.params?.address) {
      updateState({
        key: "address",
        value: route?.params?.address,
      });
    }
  }, [route?.params?.address]);

  useEffect(() => {
    if (route?.params?.isEdit) {
      setIsEdit(route?.params?.isEdit);
      handleChange("venueName", route.params.venueInfo.venueName);
      handleChange("sport", route.params.venueInfo.sport);
      handleChange("courtName", route.params.venueInfo.courtName);
      handleChange("venueDescription", route.params.venueInfo.description);
      handleChange("id", route.params.venueInfo._id);
      handleChange("image", route.params.venueInfo.image);
    }
  }, [route?.params?.isEdit]);

  return {
    isEdit,
    pickImage,
    route,
    handleGoBack,
    state,
    updateState,
    goToVenueLists,
    handleImage,
    goToChooseLocation,
    handleChange,
    handleVenueSubmit,
    handleVenueUpdate,
  };
};

export default useCreateVenue;
