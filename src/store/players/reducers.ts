import { fetchPlayerById, fetchPlayers } from "./../../services/players";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  playerDetails: {},
  error: "",
};

export const PlayerSlice = createSlice({
  name: "Player",
  initialState,
  reducers: {
    setSelectedPlayer: (s, a) => {
      s.playerDetails = a.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.fulfilled, (s, a) => {
        s.players = a.payload;
      })
      .addCase(fetchPlayerById.fulfilled, (s, a) => {
        s.playerDetails = a.payload;
      });
  },
});

export const { setSelectedPlayer } = PlayerSlice.actions;
