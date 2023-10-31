import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

// Services
import {
  addPlayersInBatch,
  deletePlayerFromBatch,
  fetchBatchById,
} from "../../../services/batches";
import { fetchPlayers } from "../../../services/players";

// Constants
import ScreensName from "../../../constants/ScreenNames";

// Interfaces
interface Player {
  account_createdAt: string;
  avatarimage: number;
  coach_id: string;
  first_name: string;
  last_name: string;
  phonenumber: string;
  __v: number;
  _id: string;
  isSelected: boolean;
}

interface RouteParams {
  batch_Id: string;
}

interface PlayerResponse {
  name: string;
  playerid: string;
}

// Custom Hook
const useAddRemovePlayer = () => {
  // Hooks
  const navigation = useNavigation();
  const route = useRoute<RouteParams>();
  const dispatch = useDispatch();

  // State
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [currentParticipantsList, setCurrentParticipants] = useState<
    PlayerResponse[]
  >([]);
  const [remainingParticipants, setRemainingParticipants] = useState<Player[]>(
    []
  );

  // Effects
  useEffect(() => {
    if (route.params?.batch_Id) {
      fetchBatchInfoById(route.params.batch_Id);
    }
  }, [route.params?.batch_Id]);

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  useEffect(() => {
    if (allPlayers?.length) {
      const currentPlayerIds = currentParticipantsList.map(
        (player) => player.playerid
      );
      let filteredRemainingParticipants = allPlayers.filter(
        (player) => !currentPlayerIds.includes(player._id)
      );
      //if (!currentPlayerIds.length) filteredRemainingParticipants = allPlayers;
      setRemainingParticipants(filteredRemainingParticipants);
    }
  }, [currentParticipantsList, allPlayers]);

  // Methods
  const fetchBatchInfoById = async (batchId: string) => {
    try {
      const response = await dispatch(fetchBatchById(batchId));
      if (
        response.payload &&
        response.payload.data &&
        Array.isArray(response.payload.data.players)
      ) {
        setCurrentParticipants(response.payload.data.players);
      } else {
        console.error("Players information is not available in the response");
      }
    } catch (error) {
      console.error("Failed to fetch batch info:", error);
    }
  };

  const goToBatchesScreen = (shouldRefresh = false) => {
    navigation.navigate(ScreensName.Batches, { shouldRefresh });
  };

  const fetchAllPlayers = async () => {
    try {
      const response = await dispatch(fetchPlayers());
      setAllPlayers(response.payload.data);
    } catch (error) {
      console.error("Failed to fetch players:", error);
    }
  };

  const handlePlayerSelection = (player: Player) => {
    const updatedPlayers = remainingParticipants.map((p) =>
      p._id === player._id ? { ...p, isSelected: !p.isSelected } : p
    );
    setRemainingParticipants(updatedPlayers);
  };

  const handleAddPlayerInBatch = () => {
    if (
      (remainingParticipants?.length || currentParticipantsList?.length) &&
      route?.params?.batch_Id
    ) {
      const selectedRemainingPlayers =
        remainingParticipants?.filter((player) => player.isSelected) || [];

      // Assume that all current participants are to be included
      const currentPlayers =
        currentParticipantsList?.map((player) => ({
          playerid: player._id,
          name: player.name,
        })) || [];

      const selectedPlayers = selectedRemainingPlayers.map((player) => ({
        playerid: player._id,
        name: `${player.first_name} ${player.last_name}`,
      }));

      const players = [...currentPlayers, ...selectedPlayers];

      if (players.length > 0) {
        const request = {
          batch_id: route.params.batch_Id,
          players,
        };

        dispatch(addPlayersInBatch(request))
          .then(() => {
            goToBatchesScreen(true);
          })
          .catch((error) => {
            console.error("Error adding players to batch:", error);
          });
      } else {
        console.log("No players selected or found in current participants.");
      }
    }
  };

  const handleCurrentParticipantRemove = (player: PlayerResponse) => {
    // 1. Remove the player from currentParticipantsList
    const request = {
      batchId: route.params.batch_Id,
      playerId: player.playerid,
    };
    dispatch(deletePlayerFromBatch(request))
      .then((res) => {
        if (res?.payload?.success)
          setCurrentParticipants((current) =>
            current.filter((p) => p.playerid !== player.playerid)
          );
      })
      .catch((error) => {
        console.error("Error adding players to batch:", error);
      });
  };

  // Return values
  return {
    allPlayers,
    toggleSelection: handlePlayerSelection,
    remainingParticipants,
    currentParticipantsList,
    handleAddPlayerInBatch,
    goToBatchesScreen,
    handleCurrentParticipantRemove,
  };
};

export default useAddRemovePlayer;
