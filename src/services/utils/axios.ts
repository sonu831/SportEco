import axios from "axios";
import { hideLoader, showLoader } from "../../store/common/reducers";
import config from "../../../config";
import { setToast } from "../../store/Toast/reducers";
import { fetchFromStorage, storeDataInStorage } from "../../utils/storage";
import { StorageKeys } from "../../constants/storageKeys";

let store: any;

export const initializeStore = (initialStore: any) => {
  store = initialStore;
};

const instance = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
});

const requestHandler = async (request: any) => {
  const token = await fetchFromStorage(StorageKeys.tokenKey);

  request.headers["token"] = token;

  store.dispatch(showLoader());
  return request;
};

const responseHandler = (response: any) => {
  store.dispatch(hideLoader());

  if (response?.headers?.token) {
    const token = response.headers.token;
    storeDataInStorage(StorageKeys.tokenKey, token);
  }

  return response;
};

const errorHandler = (error: any) => {
  store.dispatch(hideLoader());

  if (error.response.status === 401) {
    store.dispatch(
      setToast({
        type: "error",
        message: "User not authorized",
      })
    );
  }

  throw error;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(responseHandler, errorHandler);

export default instance;
