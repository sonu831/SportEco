import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { fetchPlayers, searchPlayer } from "../../services/players";
import { UpdateStateRequest } from "../../types/UpdateState";
import {
  InitialState,
  PlayersScreenNavigationProp,
  PlayersScreenRouteProp,
} from "./config";
import ScreensName from "../../constants/ScreenNames";

const initialState: InitialState = {
  showConfirmation: false,
  playerList: [],
  isSearchEnable: false,
};

const usePlayers = () => {
  const navigation = useNavigation<PlayersScreenNavigationProp>();
  const route = useRoute<PlayersScreenRouteProp>();
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<InitialState>(initialState);

  const updateState = useCallback(
    (request: UpdateStateRequest<keyof InitialState>) => {
      try {
        const handleUpdate = (key: keyof InitialState, value: any) => {
          if (!(key in initialState)) {
            console.error(
              `Invalid key: ${key} is not a property of initialState`
            );
            return;
          }
          setState((prev) => ({ ...prev, [key]: value }));
        };

        if (Array.isArray(request)) {
          request.forEach(({ key, value }) => handleUpdate(key, value));
        } else {
          const { key, value } = request;
          handleUpdate(key, value);
        }
      } catch (error) {
        console.error("An error occurred in updateState:", error);
      }
    },
    []
  );

  const handleFetchPlayer = async () => {
    try {
      const response = await dispatch(fetchPlayers());
      const playerData = response?.payload?.data || [];
      updateState({ key: "playerList", value: playerData });
      navigation.navigate(ScreensName.Players, { shouldRefresh: false });
    } catch (error) {
      console.error("Error fetching players:", error);
      // Handle the error as needed, e.g., show a notification to the user
    }
  };

  useEffect(() => {
    handleFetchPlayer();
  }, []);

  useEffect(() => {
    if (route.params?.shouldRefresh) {
      handleFetchPlayer();
    }
  }, [route.params?.shouldRefresh]);

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

    navigation.navigate(ScreensName.PlayerProfile, { playerId: playerId });
  };

  return {
    goToCreatePlayer,
    state,
    onChangeSearchBar,
    handleGoBack,
    handleEditBtn,
    goToPlayerProfile,
  };
};

export default usePlayers;
