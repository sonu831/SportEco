import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addBatch } from "../../../services/batches";

interface BatchRequest {
  batch_name: string;
  batch_desc: string;
}

export const useCreateBatch = () => {
  // State management
  const [batchName, setBatchName] = useState<string>("");
  const [batchDescription, setBatchDescription] = useState<string>("");

  // Redux dispatch and navigation hook
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Navigation functions
  const goToBatchesScreen = () => {
    navigation.navigate("Batches", { shouldRefresh: true });
  };

  // Batch creation handler
  const handleCreateBatch = useCallback(async () => {
    const request: BatchRequest = {
      batch_name: batchName,
      batch_desc: batchDescription,
    };

    try {
      const response = await dispatch(addBatch(request)).unwrap();
      if (response?.data?._id) {
        setBatchName("");
        setBatchDescription("");
        goToBatchesScreen();
      }
    } catch (error) {
      console.error("Error creating batch", error);
      // Handle error appropriately, e.g., show a notification to the user
    }
  }, [batchName, batchDescription, dispatch, goToBatchesScreen]);

  // Exposed values and functions
  return {
    batchName,
    setBatchName,
    batchDescription,
    setBatchDescription,
    handleCreateBatch,
  };
};
