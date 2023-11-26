import { useState, useEffect, useCallback } from "react";
// navigation packages
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
// navigation types
import { RootStackParamList } from "../../Navigation/types";
// redux
import { useDispatch } from "react-redux";
// services
import { deleteProgram } from "../../../services/programs";

export const useEditProgram = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "EditProgram">>();
    const { programInfo, programsName } = route.params || {};
    const { _id = "", program_name = programsName, description = "" } = programInfo || {};
    const [programName, setProgramName] = useState(program_name);
    const [programDesc, setProgramDesc] = useState(description);
    // useEffect
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    // Function
    const handleDeleteProgram = useCallback(async (_id: string) => {
        if (!_id) return;
        try {
            const res = await dispatch(deleteProgram(_id)).unwrap();
            if (res?.success) {
                navigation.replace("Programs", { shouldRefresh: true });
            } else {
                console.log("Program deletion was not successful");
            }
        } catch (error) {
            console.error("Failed to delete Program:", error);
        }
    }, [_id, dispatch, navigation]);
    return {
        programName,
        programDesc,
        setProgramName,
        setProgramDesc,
        handleDeleteProgram,
        programInfo
    };
};
