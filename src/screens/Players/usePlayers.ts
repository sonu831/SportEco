import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { userDetails$ } from "../../store/users/selectors";
import { playerDetails$ } from "../../store/players/selectors";
import {
  deletePlayer,
  fetchPlayerById,
  fetchPlayers,
  searchPlayer,
} from "../../services/players";
import { UpdateStateRequest } from "../../types/UpdateState";
import { mapResponseToPlayerData } from "./mapper";
import {
  HandleDeletePlayerFunction,
  InitialState,
  PlayerData,
  PlayersScreenNavigationProp,
  PlayersScreenRouteProp,
} from "./config";
import ScreensName from "../../constants/ScreenNames";

const initialState: InitialState = {
  showConfirmation: false,
  playerList: [],
};

const usePlayers = () => {
  const navigation = useNavigation<PlayersScreenNavigationProp>();
  const route = useRoute<PlayersScreenRouteProp>();
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector(userDetails$);
  const playerDetails = useSelector(playerDetails$);
  const [state, setState] = useState<InitialState>(initialState);
  const [playerProfileResponse, setPlayerProfileResponse] =
    useState<PlayerData>();

  const updateState = useCallback(
    (request: UpdateStateRequest<keyof InitialState>) => {
      try {
        if (Array.isArray(request)) {
          request.forEach(({ key, value }) => {
            if (key in initialState) {
              setState((prev) => ({ ...prev, [key]: value }));
            } else {
              console.error(
                `Invalid key: ${key} is not a property of initialState`
              );
            }
          });
        } else {
          const { key, value } = request;
          if (key in initialState) {
            setState((prev) => ({ ...prev, [key]: value }));
          } else {
            console.error(
              `Invalid key: ${key} is not a property of initialState`
            );
          }
        }
      } catch (error) {
        console.error("An error occurred in updateState:", error);
      }
    },
    []
  );

  const fetchPlayer = useCallback(() => {
    dispatch(fetchPlayers()).then((res) =>
      updateState({ key: "playerList", value: res?.payload?.data || [] })
    );
  }, [dispatch, updateState]);

  useEffect(() => {
    fetchPlayer();
  }, [fetchPlayer]);

  useEffect(() => {
    const playerId = route.params?.id;
    if (playerId) {
      dispatch(fetchPlayerById(playerId)).then((res) => {
        const mapped = mapResponseToPlayerData(res.payload?.data);
        setPlayerProfileResponse(mapped);
      });
    }
  }, [dispatch, route.params, updateState]);

  const handleDeletePlayer: HandleDeletePlayerFunction = () => {
    const playerId = route.params?.id;
    if (!playerId) return;

    dispatch(deletePlayer({ id: playerId })).then(() => {
      navigation.navigate("Players", { isPlayerDeleted: true });
    });
  };

  const onChangeSearchBar = (searchText: string) => {
    dispatch(searchPlayer(searchText)).then((res) => {
      updateState({ key: "playerList", value: res.payload?.data || [] });
    });
  };

  const handleGoBack = () => navigation.goBack();

  const handleEditBtn = () => navigation.navigate(ScreensName.MyAccount);

  const goToCreatePlayer = () =>
    navigation.navigate(ScreensName.PlayerProfileManager);

  const goToPlayerProfile = (playerId: string) => {
    if (!playerId) {
      console.error(
        "Player ID is required to navigate to the PlayerProfile screen."
      );
      return;
    }

    navigation.navigate(ScreensName.PlayerProfile, { id: playerId });
  };

  return {
    goToCreatePlayer,
    userDetails,
    playerDetails,
    playerProfileResponse,
    state,
    handleDeletePlayer,
    onChangeSearchBar,
    handleGoBack,
    handleEditBtn,
    goToPlayerProfile,
  };
};

export default usePlayers;
