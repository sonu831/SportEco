import { useState, useCallback } from "react";
// navigation packages
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
// navigation types
import { RootStackParamList } from "../../Navigation/types";
// redux
import { useDispatch } from "react-redux";
// services
import { deleteProgram, updateProgram } from "../../../services/programs";

export const useEditProgram = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "EditProgram">>();
    const { programInfo, programsName } = route.params || {};
    const { _id = "", program_name = programsName, description = "" } = programInfo || {};
    const [programName, setProgramName] = useState(program_name);
    const [programDesc, setProgramDesc] = useState(description);
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    // Function :To Delete Programs
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
    //Function:To Update the program details
    const handleSavePrograms = () => {
        const request = {
            name: programName,
            description: programDesc,
        };
        dispatch(updateProgram({ data: request, id: _id })).then(
            (res) => {
                if (res?.payload?.success) {
                    navigation.navigate("Programs", { shouldRefresh: true })
                }
            }
        );
    };
    return {
        programName,
        programDesc,
        setProgramName,
        setProgramDesc,
        handleDeleteProgram,
        programInfo,
        handleSavePrograms
    };
};
