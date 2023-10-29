import { useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { BatchData, InitialState } from "./config";
import {
  fetchBatchById,
  fetchBatches,
  searchBatch,
} from "../../services/batches";
import { UpdateStateRequest } from "../../types/UpdateState";
import { fetchPlayers } from "../../services/players";
import useDebouncedFunction from "../../helper/common";

const initialState = {
  showConfirmation: false,
  batchList: [],
};

interface UseBatchesProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
  route: RouteProp<RootStackParamList, "Batches">;
}

const useBatches = ({ navigation, route }: UseBatchesProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const [batchProfileResponse, setBatchProfileResponse] = useState<BatchData>();
  const [playersList, setPlayersList] = useState([]);

  // Navigation handlers
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const handleEditBtn = useCallback(
    () => navigation.navigate("MyAccount"),
    [navigation]
  );
  const gotoCreateBatch = useCallback(
    () => navigation.navigate("CreateBatch"),
    [navigation]
  );
  const gotoBatchInfo = useCallback(
    (item) => navigation.navigate("BatchInfo", { ...item }),
    [navigation]
  );

  // Data fetchers
  const fetchBatchList = async () => {
    try {
      const response = await dispatch(fetchBatches()).unwrap();
      updateState({
        key: "batchList",
        value: response?.data.length ? response.data : [],
      });
    } catch (error) {
      console.error("Failed to fetch batch list:", error);
      updateState({ key: "batchList", value: [] });
    }
  };

  const fetchBatchProfile = async (id) => {
    try {
      const response = await dispatch(fetchBatchById(id)).unwrap();
      setBatchProfileResponse(response.data);
    } catch (error) {
      console.error("Failed to fetch batch profile:", error);
    }
  };

  // State updater
  const updateState = (request: UpdateStateRequest<keyof InitialState>) => {
    if (Array.isArray(request)) {
      request.forEach(({ key, value }) =>
        setState((preState) => ({ ...preState, [key]: value }))
      );
    } else {
      const { key, value } = request;
      setState((preState) => ({ ...preState, [key]: value }));
    }
  };

  // Search handler
  const onChangeSearchBar = async (query: string) => {
    try {
      const response = await dispatch(searchBatch(query)).unwrap();
      updateState({ key: "batchList", value: response.data || [] });
    } catch (error) {
      console.error("Failed to search batches:", error);
    }
  };

  // Effects
  useEffect(() => {
    fetchBatchList();
  }, []);

  useEffect(() => {
    if (route.params?.id) {
      fetchBatchProfile(route.params.id);
    }
  }, [route.params?.id]);

  useEffect(() => {
    if (route?.params?.shouldRefresh) {
      fetchBatchList();
      navigation.setParams({ shouldRefresh: false });
    }
  }, [route?.params?.shouldRefresh]);

  useEffect(() => {
    dispatch(fetchPlayers())
      .then((res) => setPlayersList(res.payload.data))
      .catch((error) => console.error("Failed to fetch players:", error));
  }, [dispatch]);

  // Exposed values and functions
  return {
    state,
    batchProfileResponse,
    playersList,
    handleGoBack,
    handleEditBtn,
    debouncedOnChangeSearchBar: useDebouncedFunction(onChangeSearchBar, 300),
    gotoCreateBatch,
    gotoBatchInfo,
  };
};

export default useBatches;
