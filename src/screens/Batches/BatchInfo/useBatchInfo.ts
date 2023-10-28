import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchBatchById } from "../../../services/batches";
import type { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../Navigation/types";
import { Player, BatchDetail } from "./config";

export const useBatchInfo = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "BatchInfo">>();
  const dispatch = useDispatch();
  const [batchDetails, setBatchDetails] = useState<BatchDetail | null>(null); // Please replace 'BatchType' with actual type

  useEffect(() => {
    if (route.params?._id) {
      fetchBatchInfoById(route.params._id);
    }
  }, [route.params?._id]);

  const fetchBatchInfoById = async (batchId: string) => {
    try {
      const response = await dispatch(fetchBatchById(batchId));
      setBatchDetails(response.payload.data);
    } catch (error) {
      console.error("Failed to fetch batch info:", error);
    }
  };

  const gotoEditBatchInfo = () => {
    if (batchDetails) {
      navigation.navigate("EditBatchInfo", { batchInfo: batchDetails });
    } else {
      console.error("Batch details are not available");
    }
  };

  const goToAddRemovePlayer = () => {
    if (batchDetails?._id) {
      navigation.navigate("AddRemovePlayer", { batch_Id: batchDetails._id });
    } else {
      console.error("Batch ID is not available");
    }
  };

  return {
    batchDetails,
    gotoEditBatchInfo,
    goToAddRemovePlayer,
  };
};
