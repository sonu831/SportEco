import { createSelector } from "@reduxjs/toolkit";
import { VenueSlice } from "./reducers";
import { RootState } from "../index";

const venues$ = (s: RootState) => s[VenueSlice.name];

export const venueList$ = createSelector([venues$], (venue) => venue.venues);

export const selectedVenue$ = createSelector(
  [venues$],
  (venue) => venue.selectedVenue
);
