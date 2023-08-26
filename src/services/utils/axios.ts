import axios from "axios";
import * as Sentry from "@sentry/react-native";
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
  timeout: 1000,
});

const requestHandler = async (request: any) => {
  const token = await fetchFromStorage(StorageKeys.tokenKey);

  request.headers["token"] = token;

  store.dispatch(showLoader());
  // Sentry.captureException("sport eco request", request);
  console.log("Api request", request);
  return request;
};

const responseHandler = (response: any) => {
  store.dispatch(hideLoader());

  if (response?.headers?.token) {
    const token = response.headers.token;
    storeDataInStorage(StorageKeys.tokenKey, token);
  }
  Sentry.captureException("sport eco response", response);
  console.log("api response", response);
  return response;
};

const errorHandler = (error: any) => {
  store.dispatch(hideLoader());
  if (error.response.status === 401) {
    AsyncStorage.clear().then(() => {
      store.dispatch(
        setToast({
          type: "error",
          message: "User not authorized",
        })
      );
    });
  }

  Sentry.captureException("sport-eco API error", error.response);
  throw error;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(responseHandler, errorHandler);

export default instance;
