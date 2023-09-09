import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./utils/axios";
import { endpoints } from "./utils/endpoints";

export const fetchVenueList = createAsyncThunk(
  "fetchVenueList",
  async (_, { rejectWithValue }) => {
    return axios
      .get(endpoints.listOfVenue)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

type AddVenueProps = {
  data: { [key: string]: any };
};

export const addVenue = createAsyncThunk(
  "addVenue",
  async (request: AddVenueProps, { rejectWithValue }) => {
    const { data } = request;

    return axios
      .post(endpoints.addVenue, data)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

type UpdateVenueProps = {
  data: any;
  id: string;
};

export const updateVenue = createAsyncThunk(
  "updateVenue",
  async (request: UpdateVenueProps, { rejectWithValue }) => {
    const { data, id } = request;

    return axios
      .post(endpoints.updateVenue, data, {
        headers: {
          venueid: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const deleteVenue = createAsyncThunk(
  "deleteVenue",
  async (request: { id: string }, { rejectWithValue }) => {
    const { id } = request;

    return axios
      .get(endpoints.deleteVenue, {
        headers: {
          venueid: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);
