import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVenue, fetchVenueList } from "../../services/venue";
import { AppDispatch } from "../../store";
import { selectedVenue$ } from "../../store/venue/selectors";
import { UpdateStateRequest } from "../../types/UpdateState";
import { RootStackParamList } from "../Navigation/types";

type InitialState = {
  showConfirmation: boolean;
};

const initialState = {
  showConfirmation: false,
};

function useVenueDetail({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const venueDetail = useSelector(selectedVenue$);
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

  const handleDelete = () => {
    dispatch(deleteVenue({ id: venueDetail._id })).then(() =>
      dispatch(fetchVenueList()).then(() => {
        updateState({
          key: "showConfirmation",
          value: false,
        });
        navigation.navigate("Confirmation", {
          label: "Deleted !",
          navigateTo: "CommonScreen",
          navigateOption: {
            title: "Venues",
            shouldRefresh: true,
          },
        });
      })
    );
  };

  return { venueDetail, handleGoBack, handleDelete, state, updateState };
}

export default useVenueDetail;
