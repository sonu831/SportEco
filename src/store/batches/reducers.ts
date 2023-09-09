import {
  deleteBatch,
  fetchBatchById,
  fetchBatches,
} from "./../../services/batches";
import { createSlice } from "@reduxjs/toolkit";
import { PlayerDefinition } from "../../types/player";

const initialState = {
  batches: [],
  batchDetails: {},
  selectedPlayers: [],
  error: "",
};

export const BatchSlice = createSlice({
  name: "Batches",
  initialState,
  reducers: {
    setSelectedPlayers: (s, a) => {
      s.selectedPlayers = a.payload;
    },
    setSelectedBatch: (s, a) => {
      s.batchDetails = a.payload;
    },
    deletePlayer: (s, a) => {
      s.selectedPlayers = s.selectedPlayers.filter(
        (item: PlayerDefinition) =>
          item.playerid !== a.payload.playerid || item._id !== a.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatches.fulfilled, (s, a) => {
        s.batches = a.payload;
      })
      .addCase(deleteBatch.fulfilled, (s, a) => {
        s.batchDetails = initialState.batchDetails;
        s.selectedPlayers = initialState.selectedPlayers;
      });
  },
});

export const { setSelectedPlayers, deletePlayer, setSelectedBatch } =
  BatchSlice.actions;
