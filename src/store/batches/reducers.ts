import { fetchBatchById, fetchBatches } from "./../../services/batches";
import { createSlice } from "@reduxjs/toolkit";

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
        (item) => item.playerid !== a.payload.playerid
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatches.fulfilled, (s, a) => {
        s.batches = a.payload;
      })
      .addCase(fetchBatchById.fulfilled, (s, a) => {
        s.batchDetails = a.payload;
      });
  },
});

export const { setSelectedPlayers, deletePlayer, setSelectedBatch } =
  BatchSlice.actions;