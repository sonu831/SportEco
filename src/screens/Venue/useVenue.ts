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
import { deleteVenue, fetchVenueList } from "../../services/venue";
import { Venue } from "./types";

type InitialState = {
  showConfirmation: boolean;
};

const initialState = {
  showConfirmation: false,
};

const useVenue = () => {
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
  const goToVenueDetails = (venue: Venue) => {
    navigation.navigate(ScreensName.VenueDetails, {
      venueDetails: venue,
    });
  };
  const goToCreateVenue = () => navigation.navigate(ScreensName.CreateVenue);

  const gotoEditVenue = (venue) => {
    navigation.navigate(ScreensName.CreateVenue, { isEdit: true, venueInfo: venue });
  };

  const fetchVenues = () => {
    dispatch(fetchVenueList());
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  useEffect(() => {
    if (venueList.length) console.log("venueList...", venueList);
  }, [venueList]);

  useEffect(() => {
    if (route.params?.shouldRefresh) dispatch(fetchVenueList());
  }, [route.params?.shouldRefresh]);

  const venueDeStructure = (venue): Venue => {
    return {
      _id: venue?._id || "",
      venueName: venue?.venue_name || "",
      venueLocation: venue?.address || "",
      courtName: venue?.court_name || "",
      sport: venue?.sport || "",
      distance: "",
      description: "",
      image: venue?.images?.filedata?.length
        ? `data:image/png;base64,${venue.images.filedata}`
        : "",
      state: venue?.state || "",
      city: venue?.city || "",
      latitudelongitude: venue?.latitudelongitude || "",
    };
  };

  const onDeleteVenue = async (_id: any) => {
    if (_id) {
      const res = await dispatch(deleteVenue(_id));
      if (!!res?.payload?.success) {
        fetchVenues();
      }
    }
  };

  return {
    route,
    venueList,
    handleGoBack,
    state,
    onDeleteVenue,
    updateState,
    goToVenueDetails,
    goToCreateVenue,
    venueDeStructure,
    gotoEditVenue,
  };
};

export default useVenue;
