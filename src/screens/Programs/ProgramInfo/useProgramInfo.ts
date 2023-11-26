import { useState, useEffect, useCallback } from "react";
// navigation packages
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
// navigation types
import { RootStackParamList } from "../../Navigation/types";
//config
import { ProgramDetail, ProgramRequest } from "./config";
// redux
import { useDispatch } from "react-redux";
// services
import { getProgromDataById } from "../../../services/programs";

export const useProgramInfo = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "ProgramInfo">>();
    // useState
    const [programDetails, setProgramDetails] = useState<ProgramDetail | null>(null)
    const [programName, setProgramName] = useState<ProgramDetail | null>(route.params?.name)
    // useEffect
    useEffect(() => {
        if (route.params?._id) {
            fetchProgramById(route.params?._id)
        }
    }, [route.params?._id]);
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    const goToAddSession = useCallback((programData) => {
        navigation.navigate("CreateSession", { ...programData })
    }, [navigation])
    // Program by id handler
    const fetchProgramById = async (programId: string) => {
        try {
            const response = await dispatch(getProgromDataById(programId)).unwrap();
            const programData = response?.data;
            setProgramDetails(programData)
        } catch (error) {
            console.error("Error fetching programs info", error);
        }
    }
    const goToEditProgram = useCallback(() => {
        if (programDetails) {
            navigation.navigate('EditProgram', { programInfo: programDetails, programsName: route.params?.name })
        } else {
            console.log("programInfo not found")
        }
    }, [navigation, programDetails, programName])
    return {
        programDetails,
        goToEditProgram,
        goToAddSession,
        programName
    };
};
