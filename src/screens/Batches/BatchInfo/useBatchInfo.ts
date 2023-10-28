import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigation/types";

export const useBatchInfo = () => {
  const route = useRoute<RouteProp<RootStackParamList, "BatchInfo">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const batchInfo = route?.params?.batchInfo;

  const gotoEditBatchInfo = () => {
    navigation.navigate("EditBatchInfo", { batchInfo });
  };

  const goToAddRemovePlayer = (item) => {
    navigation.navigate("AddRemovePlayer", { batch_Id: item?._id });
  };

  return {
    batchInfo,
    gotoEditBatchInfo,
    goToAddRemovePlayer,
  };
};
