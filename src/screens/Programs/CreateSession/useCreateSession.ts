import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { addPrograms, addSessionInProgram } from "../../../services/programs";
import { RootStackParamList } from "../../Navigation/types";
import ScreensName from "../../../constants/ScreenNames";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface sessionRequest {
    _id: string;
    name: string;
    description: string;
    duration: number;
}

interface RouteParams {
    program_id: string;
}

export const useCreateSession = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "CreateSession">>();
    // State management
    const [sessionName, setSessionName] = useState<string>("");
    const [sessionDescription, setSessionDescription] = useState<string>("")
    const [sessionDuration, setSessionDuration] = useState<string>("")
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    const goToProgramScreen = (shouldRefresh = false) => {
        navigation.navigate(ScreensName.Programs, { shouldRefresh });
    };
    // session creation handler
    const handleCreateSession = useCallback(async () => {
        const request: any = {
            program_id: route.params._id,
            sessions: [
                {
                    name: sessionName,
                    description: sessionDescription,
                    duration: sessionDuration,
                }
            ]
        };
        try {
            const response = await dispatch(addSessionInProgram(request)).unwrap();
            if (response?.success) {
                setSessionName("");
                setSessionDescription("");
                setSessionDuration("")
                goToProgramScreen(true)
            }
        } catch (error) {
            console.error("Error creating programs", error);
            // Handle error appropriately, e.g., show a notification to the user
        }
    }, [sessionName, sessionDescription, sessionDuration, dispatch]);

    // Exposed values and functions
    return {
        sessionName,
        setSessionName,
        sessionDescription,
        setSessionDescription,
        sessionDuration,
        setSessionDuration,
        handleCreateSession
    };
};
