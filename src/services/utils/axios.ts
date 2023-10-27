import axios from "axios";
//import * as Sentry from "@sentry/react-native";
import { hideLoader, showLoader } from "../../store/common/reducers";
import config from "../../../config";
import { setToast } from "../../store/Toast/reducers";
import { fetchFromStorage, storeDataInStorage } from "../../utils/storage";
import { StorageKeys } from "../../constants/storageKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";

let store: any;

export const initializeStore = (initialStore: any) => {
  store = initialStore;
};

const instance = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
  timeout: 5000,
});

const logApiRequest = (request) => {
  // Log the Request Headers
  console.log("Request Headers:", request.headers);

  // Check and Log the Request Payload if available
  if (request?.data) {
    console.log("Request Payload:", request.data);
  }

  // // Extract and Log the Request Params
  // const requestURL = new URL(request?.baseURL + request?.url);
  // const requestParams = new URLSearchParams(requestURL.search);
  // if (requestParams && Array.from(requestParams.entries()).length > 0) {
  //   console.log("Request Params:", Object.fromEntries(requestParams));
  // } else {
  //   console.log("Request Params: None");
  // }
};

const logApiResponse = (response) => {
  console.log("Response Status Code:", response.status);

  // Checking for errors
  if (response.data && !response.data.success) {
    console.log("Response Error Message:", response.data.message);
  }

  console.log("Response Data:", response.data.data);
};

const requestHandler = async (request: any) => {
  const token = await fetchFromStorage(StorageKeys.tokenKey);

  request.headers["token"] = token;

  if (request.data instanceof FormData) {
    request.headers["Content-Type"] = "multipart/form-data";
    console.log("headers form data", request.headers);
  } else {
    // Set the Content-Type header to 'application/json' for all other requests
    request.headers["Content-Type1"] = "application/json";
  }

  store.dispatch(showLoader());
  // Sentry.captureException("sport eco request", request);
  console.log("Api request", request);
  //logApiRequest(request);
  return request;
};

const responseHandler = (response: any) => {
  store.dispatch(hideLoader());

  if (response?.headers?.token) {
    const token = response.headers.token;
    storeDataInStorage(StorageKeys.tokenKey, token);
  }
  //Sentry.captureException("sport eco response", response);
  console.log("api response", response);
  //logApiResponse(response);
  return response;
};

const errorHandler = (error: any) => {
  store.dispatch(hideLoader());
  console.log("API ERROR", error);
  if (error?.response?.status === 401) {
    AsyncStorage.clear().then(() => {
      store.dispatch(
        setToast({
          type: "error",
          message: "User not authorized",
        })
      );
    });
  }

  //Sentry.captureException("sport-eco API error", error.response);
  throw error;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(responseHandler, errorHandler);

export default instance;
