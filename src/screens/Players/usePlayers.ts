import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { userDetails$ } from "../../store/users/selectors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import {
  deletePlayer,
  fetchPlayerById,
  fetchPlayers,
  searchPlayer,
} from "../../services/players";
import { playerDetails$ } from "../../store/players/selectors";
import { PlayerDefinition } from "../../types/player";
import { UpdateStateRequest } from "../../types/UpdateState";
import { HandleDeletePlayerFunction, InitialState, PlayerData } from "./config";
import { mapResponseToPlayerData } from "./mapper";

const initialState = {
  showConfirmation: false,
  playerList: [],
};

const usePlayers = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "Players">;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector(userDetails$);
  const playerDetails: Partial<PlayerDefinition> = useSelector(playerDetails$);
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const [playerProfileResponse, setPlayerProfileResponse] =
    useState<PlayerData>();

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

  const handleGoBack = () => navigation.goBack();

  const handleDeletePlayer: HandleDeletePlayerFunction = () => {
    if (!route?.params?.id) return;
    dispatch(deletePlayer({ id: route.params.id })).then((res) => {
      navigation?.navigate("Players", {
        isPlayerDeleted: true,
      });
    });
  };

  const onChangeSearchBar = (e: string) => {
    dispatch(searchPlayer(e)).then((res) => {
      updateState({ key: "playerList", value: res?.payload?.data ?? [] });
    });
  };

  const fetchPlayerList = (isPlayerDeleted = false) => {
    dispatch(fetchPlayers()).then((res) =>
      updateState({ key: "playerList", value: res?.payload?.data ?? [] })
    );
  };

  useEffect(() => {
    if (route?.params?.id)
      dispatch(fetchPlayerById(route.params.id)).then((res) => {
        const mapped = mapResponseToPlayerData(res?.payload?.data);

        setPlayerProfileResponse(mapped);
      });
  }, []);

  useEffect(() => {
    if (route.params?.isPlayerDeleted) {
      fetchPlayerList(route.params?.isPlayerDeleted);
    } else fetchPlayerList();
  }, [route.params]);

  const handleEditBtn = () => navigation.navigate("MyAccount");
  return {
    userDetails,
    handleGoBack,
    handleEditBtn,
    updateState,
    state,
    playerProfileResponse,
    handleDeletePlayer,
    onChangeSearchBar,
  };
};

export default usePlayers;
