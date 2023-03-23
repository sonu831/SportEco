import axios from "./utils/axios";
import { endpoints } from "./utils/endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AddPlayerProps = {
  data: { [key: string]: any };
};

export const addPlayer = createAsyncThunk(
  "addPlayer",
  async (request: AddPlayerProps, { rejectWithValue }) => {
    const { data } = request;

    return axios
      .post(endpoints.addPlayer, data)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchPlayers = createAsyncThunk(
  "fetchPlayers",
  async (_, { rejectWithValue }) => {
    return axios
      .get(endpoints.fetchPlayers)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchPlayerById = createAsyncThunk(
  "fetchPlayerById",
  async (id: string, { rejectWithValue }) => {
    return axios
      .get(endpoints.fetchPlayerById(id))
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const deletePlayer = createAsyncThunk(
  "deletePlayer",
  async ({ id }: { id: string | undefined }, { rejectWithValue }) => {
    return axios
      .get(endpoints.deletePlayer, {
        headers: {
          playerid: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const uploadPlayerProfilePicture = createAsyncThunk(
  "uploadPlayerProfilePicture",
  async (request: any, { rejectWithValue }) => {
    return axios
      .post(endpoints.uploadPlayerProfileImage, request?.formData, {
        headers: {
          playerid: request.playerId,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const updatePlayerProfile = createAsyncThunk(
  "updatePlayerProfile",
  async (request: any, { rejectWithValue }) => {
    return axios
      .post(endpoints.updatePlayerProfile, request.data, {
        headers: {
          playerid: request.playerId,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);
