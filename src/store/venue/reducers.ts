import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockVenue } from "../../constants";
import { fetchVenueList } from "../../services/venue";
import { VenueListApiResponse } from "./interface";

type InitialState = {
  venues: any[];
  selectedVenue: any;
};

const initialState: InitialState = {
  venues: [],
  selectedVenue: {},
};

export const VenueSlice = createSlice({
  name: "Venues",
  initialState,
  reducers: {
    setSelectedVenue: (s, a) => {
      s.selectedVenue = a.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchVenueList.fulfilled,
      (s, a: PayloadAction<VenueListApiResponse>) => {
        s.venues = a.payload.data;
      }
    );
  },
});

export const { setSelectedVenue } = VenueSlice.actions;
