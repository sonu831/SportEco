import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { deleteBatch } from "../../../services/batches";

type RootStackParamList = {
  EditBatchInfo: {
    batchInfo: { _id: string; batch_name?: string; description?: string };
  };
  AddRemovePlayer: undefined;
  // Other screens and their params
};

export const useEditBatchInfo = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "EditBatchInfo">>();

  const { batchInfo } = route.params || {};
  const { _id: batchId, batch_name = "", description = "" } = batchInfo || {};

  const [batchName, setBatchName] = useState(batch_name);
  const [batchDesc, setBatchDesc] = useState(description);

  const gotoAddRemovePlayer = useCallback(() => {
    navigation.navigate("AddRemovePlayer");
  }, [navigation]);

  const handleDeleteBatch = useCallback(async () => {
    if (!batchId) return;
    try {
      const res = await dispatch(deleteBatch(batchId)).unwrap();
      if (res.success) {
        navigation.navigate("Batches", { shouldRefresh: true });
      } else {
        console.log("Batch deletion was not successful");
      }
    } catch (error) {
      console.error("Failed to delete batch:", error);
    }
  }, [batchId, dispatch, navigation]);

  return {
    batchName,
    setBatchName,
    batchDesc,
    setBatchDesc,
    gotoAddRemovePlayer,
    handleDeleteBatch,
  };
};
