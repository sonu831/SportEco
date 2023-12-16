import { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PlayerProfileNavigationProp, PlayerProfileRouteProp } from "./config";
import { deletePlayer, fetchPlayerById } from "../../../services/players";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import ScreensName from "../../../constants/ScreenNames";
import { initializePlayer, mapResponseToPlayerData } from "../../../helper";
import { PlayerDetails } from "../../../interface/player";

const usePlayerProfile = () => {
  const navigation = useNavigation<PlayerProfileNavigationProp>();
  const route = useRoute<PlayerProfileRouteProp>();
  const dispatch = useDispatch<AppDispatch>();

  const [playerDetails, setPlayerDetails] = useState<PlayerDetails>(
    initializePlayer()
  );

  useEffect(() => {
    const playerId = route.params.playerId;
    if (playerId) {
      dispatch(fetchPlayerById(playerId)).then((res) => {
        const mapped = mapResponseToPlayerData(res.payload?.data);
        setPlayerDetails(mapped);
      });
    }
  }, [route.params.playerId]);

  const { firstName, lastName, playerId, profilePic } = playerDetails || {};

  const goToEditPlayerProfile = useCallback(() => {
    navigation.navigate(ScreensName.PlayerProfileManager, {
      isEdit: true,
      playerId: playerId,
    });
  }, [playerId, navigation]);

  const handleDeletePlayer = () => {
    const playerId = route.params.playerId;
    if (!playerId) return;
    dispatch(deletePlayer({ id: playerId })).then(() => {
      navigation.navigate(ScreensName.Players, { shouldRefresh: true });
    });
  };

  return {
    firstName,
    lastName,
    profilePic,
    goToEditPlayerProfile,
    handleDeletePlayer,
  };
};

export default usePlayerProfile;
