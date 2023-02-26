import { createSelector } from "@reduxjs/toolkit";
import { BatchSlice } from "./reducers";
import { RootState } from "../index";

const batch$ = (s: RootState) => s[BatchSlice.name];

export const batches$ = createSelector([batch$], (batch) => batch.batches);

export const batchDetails$ = createSelector(
  [batch$],
  (batch) => batch.batchDetails?.data || {}
);

export const selectedPlayers$ = createSelector(
  [batch$],
  (batch) => batch.selectedPlayers || []
);