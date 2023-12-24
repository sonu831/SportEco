import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { deleteBatch, updateBatch } from "../../../services/batches";

type RootStackParamList = {
  EditBatchInfo: {
    batchInfo: { _id: string; batch_name?: string; description?: string, players?: any };
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
  const { _id: batchId, batch_name = "", description = "", players = [] } = batchInfo || {};

  const [batchName, setBatchName] = useState(batch_name);
  const [batchDesc, setBatchDesc] = useState(description);

  const gotoAddRemovePlayer = useCallback(() => {
    navigation.navigate("AddRemovePlayer");
  }, [navigation]);

  const handleDeleteBatch = useCallback(async () => {
    console.log("batchId---",batchId);
    if (!batchId) return;
    try {
      const res = await dispatch(deleteBatch(batchId)).unwrap();
      if (res?.success) {
        navigation.navigate("Batches", { shouldRefresh: true });
      } else {
        console.log("Batch deletion was not successful");
      }
    } catch (error) {
      console.error("Failed to delete batch:", error);
    }
  }, [batchId, dispatch, navigation]);

  // Batch update handler
  const handleUpdateBatch = useCallback(async () => {
    const request: any = {
      data: {
        batch_name: batchName,
        description: batchDesc,
        players: players,
      },
      id: batchId,
    }

    try {
      const response = await dispatch(updateBatch(request)).unwrap();
      if (response?.data?._id) {
        setBatchName("");
        setBatchDesc("");
        navigation.navigate("Batches", { shouldRefresh: true });
      }
    } catch (error) {
      console.error("Error creating batch", error);
      // Handle error appropriately, e.g., show a notification to the user
    }
  }, [batchName, batchDesc, dispatch]);

  return {
    batchName,
    setBatchName,
    batchDesc,
    setBatchDesc,
    gotoAddRemovePlayer,
    handleDeleteBatch,
    handleUpdateBatch,
  };
};
