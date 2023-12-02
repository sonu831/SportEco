import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store";
import { UpdateStateRequest } from "../../../types/UpdateState";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";
import { Dimensions } from "react-native";

interface VenueDetails {
  showConfirmation: boolean;
  currentPage: number;
}

const initialState = {
  showConfirmation: false,
  currentPage: 0,
};

const useVenueDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, ScreensName.VenueDetails>>();
  const dispatch = useDispatch<AppDispatch>();

  const [state, setState] = useState<VenueDetails>(initialState);
  const flatListRef = useRef(null);

  const updateState = (request: UpdateStateRequest<keyof VenueDetails>) => {
    Array.isArray(request)
      ? request.forEach(({ key, value }) =>
          setState((prevState) => ({ ...prevState, [key]: value }))
        )
      : setState((prevState) => ({
          ...prevState,
          [request.key]: request.value,
        }));
  };

  const handlePageChange = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offset / Dimensions.get("window").width);
    updateState({
      key: "currentPage",
      value: page,
    });
  };

  const carouselData = [
    { text: "Item 1", image: require("../../../assets/images/loginImage.png") },
    { text: "Item 2", image: require("../../../assets/images/loginImage.png") },
    { text: "Item 3", image: require("../../../assets/images/loginImage.png") },
  ];

  return {
    route,
    ...state,
    flatListRef,
    handlePageChange,
    carouselData,
    navigation,
  };
};

export default useVenueDetails;
