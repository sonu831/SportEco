import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addPrograms, addSessionInProgram } from "../../../services/programs";

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
    const route = useRoute();
    // State management
    const [sessionName, setSessionName] = useState<string>("");
    const [sessionDescription, setSessionDescription] = useState<string>("")
    const [sessionDuration, setSessionDuration] = useState<string>("")
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // Batch creation handler
    const handleCreateSession = useCallback(async () => {
        let programId = (route.params as RouteParams).program_id
        const request: sessionRequest = {
            program_id: programId,
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
            console.log("response", response);
            if (response?.data?._id) {
                setSessionName("");
                setSessionDescription("");
                setSessionDuration("")
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
