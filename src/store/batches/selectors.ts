import { createSelector } from "@reduxjs/toolkit";
import { BatchSlice } from "./reducers";
import { RootState } from "../index";

const batch$ = (s: RootState) => s[BatchSlice.name];
// @ts-ignore
export const batches$ = createSelector([batch$], (batch) => batch.batches.data);

export const batchDetails$ = createSelector(
  [batch$],
  (batch) => batch.batchDetails || {}
);

export const selectedPlayers$ = createSelector(
  [batch$],
  (batch) => batch.selectedPlayers || []
);
