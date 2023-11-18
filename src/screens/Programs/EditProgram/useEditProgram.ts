import { useState, useEffect, useCallback } from "react";
// navigation packages
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
// navigation types
import { RootStackParamList } from "../../Navigation/types";
//config
import { ProgramDetail, ProgramRequest } from "../config";
// redux
import { useDispatch } from "react-redux";
// services
import { getProgromDataById } from "../../../services/programs";

export const useEditProgram = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "EditProgram">>();
    const { programInfo } = route.params || {};
    console.log("programInfo", programInfo);

    const { _id: batchId, program_name = "", description = "" } = programInfo || {};
    const [programName, setProgramName] = useState(program_name);
    const [programDesc, setProgramDesc] = useState(description);
    // useEffect
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();

    return {
        programName,
        programDesc,
        setProgramName,
        setProgramDesc
    };
};
