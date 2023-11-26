import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { venueList$ } from "../../store/venue/selectors";
import { UpdateStateRequest } from "../../types/UpdateState";
import { RootStackParamList } from "../Navigation/types";
import ScreensName from "../../constants/ScreenNames";
import { fetchVenueList } from "../../services/venue";

type InitialState = {
  showConfirmation: boolean;
};

const initialState = {
  showConfirmation: false,
};

function useVenue() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, ScreensName.Venues>>(); // Adjusted based on your context

  const dispatch = useDispatch<AppDispatch>();
  const venueList = useSelector(venueList$);
  const [state, setState] = useState<Partial<InitialState>>(initialState);

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

  const handleGoBack = () => navigation.goBack();
  const goToVenueDetails = () => navigation.navigate(ScreensName.VenueDetails);
  const goToCreateVenue = () => navigation.navigate(ScreensName.CreateVenue);

  useEffect(() => {
    dispatch(fetchVenueList());
  }, []);

  useEffect(()=>{
  if(venueList.length)
  console.log('venueList...',venueList)
  },[venueList])

  useEffect(() => {
    if (route.params?.shouldRefresh) dispatch(fetchVenueList());
  }, [route.params?.shouldRefresh]);

  return {
    route,
    venueList,
    handleGoBack,
    state,
    updateState,
    goToVenueDetails,
    goToCreateVenue,
  };
}

export default useVenue;
