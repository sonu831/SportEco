import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { userDetails$ } from "../../store/users/selectors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { deletePlayer } from "../../services/players";
import { playerDetails$ } from "../../store/players/selectors";
import { PlayerDefinition } from "../../types/player";
import { UpdateStateRequest } from "../../types/UpdateState";

type InitialState = {
  showConfirmation: boolean;
};

const initialState = {
  showConfirmation: false,
};

const useProfilePage = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "Profile">;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector(userDetails$);
  const playerDetails: Partial<PlayerDefinition> = useSelector(playerDetails$);
  const [state, setState] = useState<Partial<InitialState>>(initialState);

  const { showConfirmation } = state;

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

  const isPlayer = route.params?.player || false;

  const dataToShow = !!isPlayer ? playerDetails : userDetails;

  const handleGoBack = () => navigation.goBack();

  const handleEditBtn = () =>
    navigation.navigate("EditProfile", { isEdit: true, isAddPlayer: isPlayer });

  const handlePlayerDeletion = () => {
    dispatch(deletePlayer({ id: playerDetails?._id })).then((res) => {
      if (!!res) {
        updateState({
          key: "showConfirmation",
          value: !showConfirmation,
        });

        navigation.navigate("Confirmation", {
          label: "Deleted !",
          navigateTo: "CommonScreen",
          navigateOption: {
            title: "Players",
            shouldRefresh: true,
          },
        });
      }
    });
  };

  return {
    userDetails,
    handleGoBack,
    dataToShow,
    showPlayerDetails: isPlayer,
    handlePlayerDeletion,
    handleEditBtn,
    updateState,
    state,
  };
};

export default useProfilePage;
