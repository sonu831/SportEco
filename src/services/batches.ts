import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "./utils/endpoints";
import axios from "./utils/axios";

export const addBatch = createAsyncThunk(
  "addBatch",
  async (request: { [key: string]: any }, { rejectWithValue }) => {
    return axios
      .post(endpoints.addBatch, request)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const updateBatch = createAsyncThunk(
  "updateBatch",
  async (request: { [key: string]: any }, { rejectWithValue }) => {
    return axios
      .post(endpoints.updateBatchDetails, request.data, {
        headers: {
          batch_id: request.id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchBatches = createAsyncThunk(
  "fetchBatches",
  async (_, { rejectWithValue }) => {
    return axios
      .get(endpoints.fetchBatchList)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchBatchById = createAsyncThunk(
  "fetchBatchById",
  async (request: any, { rejectWithValue }) => {
    return axios
      .get(endpoints.fetchBatchById, {
        headers: {
          batch_id: request.id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const deleteBatch = createAsyncThunk(
  "deleteBatch",
  async (id: string, { rejectWithValue }) => {
    return axios
      .get(endpoints.deleteBatchById, {
        headers: {
          batch_id: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const addPlayersInBatch = createAsyncThunk(
  "addPlayersInBatch",
  async (request: { [key: string]: any }, { rejectWithValue }) => {
    return axios
      .post(endpoints.addPlayerInBatch, request)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const deletePlayerFromBatch = createAsyncThunk(
  "deletePlayerFromBatch",
  async (request: any, { rejectWithValue }) => {
    return axios
      .get(endpoints.deletePlayerFromBatch, {
        headers: {
          batch_id: request.id,
          player_id: request.playerId,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);
