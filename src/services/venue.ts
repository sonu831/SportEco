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

export const addVenue = createAsyncThunk(
  "addVenue",
  async (request: FormData, { rejectWithValue }) => {
    console.log("requestCall",request)
    return axios
      .post(endpoints.addVenue, request)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

// type UpdateVenueProps = {
//   data: FormData;
//   id: string;
// };  // we are rpoviding id in formData

export const updateVenue = createAsyncThunk(
  "updateVenue",
  async (request: FormData, { rejectWithValue }) => {
    //const { data, id } = request;

    return axios
      .post(endpoints.updateVenue, request
      //   , {
      //   headers: {
      //     venueid: id,
      //   },
      // }
      )
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const deleteVenue = createAsyncThunk(
  "deleteVenue",
  async (id: string, { rejectWithValue }) => {
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
