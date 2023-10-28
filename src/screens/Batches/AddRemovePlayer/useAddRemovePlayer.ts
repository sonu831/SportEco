import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addPlayersInBatch } from "../../../services/batches";
import { fetchPlayers } from "../../../services/players";
import ScreensName from "../../../constants/ScreenNames";

interface Player {
  _id: string;
  name: string;
}

interface RouteParams {
  batch_Id: string;
}

const useAddRemovePlayer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const goToBatchesScreen = (shouldRefresh = false) => {
    navigation.navigate(ScreensName.Batches, { shouldRefresh });
  };

  const fetchAllPlayers = async () => {
    try {
      const response = await dispatch(fetchPlayers());
      setPlayersList(response.payload.data);
    } catch (error) {
      console.error("Failed to fetch players:", error);
    }
  };

  const addPlayerToBatch = async () => {
    const batchId = (route.params as RouteParams).batch_Id;
    const playersToAdd = selectedPlayers.map((player) => ({
      playerid: player._id,
      name: player.name,
    }));
    const request = { batch_id: batchId, players: playersToAdd };

    try {
      await dispatch(addPlayersInBatch(request));
      goToBatchesScreen(true);
    } catch (error) {
      console.error("Failed to add players in batch", error);
    }
  };

  const handlePlayerSelection = (player: Player) => {
    const index = selectedPlayers.findIndex((p) => p._id === player._id);
    if (index > -1) {
      const updatedPlayers = selectedPlayers.filter(
        (p) => p._id !== player._id
      );
      setSelectedPlayers(updatedPlayers);
    } else {
      setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
    }
  };

  const handleAddPlayerInBatch = () => {
    const request = {
      batch_id: route.params.batch_Id,
      players: [
        {
          playerid: "6512f1f92feb5c05bb8c8624",
          name: "vishal",
        },
      ],
    };
    dispatch(addPlayersInBatch(request)).then((res) => {
      // const resData = res.payload?.data;
      goToBatchesScreen(true);
    });
  };

  const saveDeletePlayer = (item: any) => {
    debugger;
    const isAlready = selectedPlayers.findIndex((e) => e._id == item._id);
    if (isAlready > -1) {
      const filteredData = selectedPlayers.filter((e) => e._id != item._id);
      setSelectedPlayers(filteredData);
    } else {
      setSelectedPlayers([...selectedPlayers, item]);
    }
  };

  const currentParticipants = [
    { id: 1, name: "Miles Morales" },
    { id: 2, name: "Gwen Stacy" },
    { id: 3, name: "May Parker" },
  ];

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  return {
    currentParticipants,
    handleAddPlayerInBatch,
    goToBatchesScreen,
    addPlayerToBatch,
    handlePlayerSelection,
    playersList,
    selectedPlayers,
    setSelectedPlayers,
    saveDeletePlayer,
  };
};

export default useAddRemovePlayer;
