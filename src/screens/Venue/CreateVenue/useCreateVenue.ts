import { useNavigation, useRoute } from "@react-navigation/native";
//import * as Permissions from "expo-permissions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
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
  sport: any;
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

  const handleChange = (key, value) => {
    if (key)
      updateState({
        key,
        value,
      });
  };

  const items = [{
    label: 'Basket Ball',
    value: 'Basket Ball'
  }, {
    label: 'Volley Ball',
    value: 'Volley Ball'
  }, {
    label: 'Badminton',
    value: 'Badminton'
  }, {
    label: 'Karate',
    value: 'Karate'
  }, {
    label: 'Cricket',
    value: 'Cricket'
  }]

  const [selectedItems, setSelectedItems] = useState<any>([]);
  const multiSelectRef = useRef(null);
  const onSelectedItemsChange = (items: any) => {
    setSelectedItems(items);
    handleChange("sport", items);
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
      let sportsString = route.params.venueInfo.sport;
      let arrayOfSports = sportsString.split(',');
      setSelectedItems(arrayOfSports);
      handleChange("venueName", route.params.venueInfo.venueName);
      //handleChange("sport", route.params.venueInfo.sport);
      handleChange("courtName", route.params.venueInfo.courtName);
      handleChange("venueDescription", route.params.venueInfo.description);
      handleChange("id", route.params.venueInfo._id);
      handleChange("image", route.params.venueInfo.image);
    }
  }, [route?.params?.isEdit]);

  return {
    isEdit,
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
    items,
    selectedItems,
    multiSelectRef,
    onSelectedItemsChange,
  };
};

export default useCreateVenue;
