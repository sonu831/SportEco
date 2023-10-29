import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigation/types";

export const useProgramInfo = () => {
    const route = useRoute<RouteProp<RootStackParamList, "ProgramInfo">>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const programInfo = route?.params?.programInfo;
    return {
        programInfo,
    };
};
