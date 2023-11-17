import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addPrograms } from "../../../services/programs";

interface ProgramRequest {
    name: string;
    description: string;
}

export const useCreateProgram = () => {
    // State management
    const [programName, setProgramName] = useState<string>("");
    const [programDescription, setProgramDescription] = useState<string>("");

    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    const navigation = useNavigation();

    // Navigation functions
    const goToProgramsScreen = useCallback(() => {
        navigation.navigate("Programs", { shouldRefresh: true });
    }, [navigation]);

    const goToProgramInfoScreen = useCallback((item) =>
        navigation.navigate('ProgramInfo',
            { programInfo: item }
        ), [navigation])

    // Program creation handler
    const handleCreateProgram = useCallback(async () => {
        const request: ProgramRequest = {
            name: programName,
            description: programDescription,
        };
        try {
            const response = await dispatch(addPrograms(request)).unwrap();
            if (response?.data?._id) {
                setProgramName("");
                setProgramDescription("");
                goToProgramsScreen()
            }
        } catch (error) {
            console.error("Error creating programs", error);
            // Handle error appropriately, e.g., show a notification to the user
        }
    }, [programName, programDescription, dispatch, goToProgramsScreen, goToProgramInfoScreen]);


    // Exposed values and functions
    return {
        programName,
        setProgramName,
        programDescription,
        setProgramDescription,
        handleCreateProgram,
        goToProgramInfoScreen
    };
};
