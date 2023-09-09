import { createSelector } from "@reduxjs/toolkit";
import { PlayerSlice } from "./reducers";
import { RootState } from "../index";

const player$ = (s: RootState) => s[PlayerSlice.name];

export const players$ = createSelector(
  [player$],
  // @ts-ignore
  (players) => players.players?.data || []
);

export const playerDetails$ = createSelector(
  [player$],
  (players) => players.playerDetails
);
