import { useDispatch } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
// packages
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
// redux
import { AppDispatch } from "../../store";
// config
import { InitialState, ProgramData, } from "./config";
// types
import { UpdateStateRequest } from "../../types/UpdateState";
// services
import { fetchPrograms } from "../../services/programs";
import ScreensName from "../../constants/ScreenNames";

const initialState = {
    showConfirmation: false,
    programList: [],
};
interface useProgramProps {
    navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
    route: RouteProp<RootStackParamList, "Programs">
}
const usePrograms = ({ navigation, route }: useProgramProps) => {
    const dispatch = useDispatch<AppDispatch>(); // var
    // Navigation Handler
    const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
    const handleEditBtn = useCallback(() => navigation.navigate("MyAccount"), [navigation]);
    const handleCreateProgram = useCallback(() => navigation.navigate("CreatePrograms"), [navigation])
    // states
    const [state, setState] = useState<Partial<InitialState>>(initialState);
    const [programsList, setProgramsList] = useState<ProgramData>();
    // Data fetchers
    const refetchPrograms = async () => {
        try {
            const response = await dispatch(fetchPrograms())
            updateState({ key: "programList", value: response?.payload?.data ?? [] });
        } catch (error) {
            console.log("Failed to fetch the program List.")
            updateState({ key: "programList", value: [] });
        }
    };
    // useEffect
    useEffect(() => {
        refetchPrograms();
    }, [])
    useEffect(() => {
        if (route?.params?.shouldRefresh) {
            refetchPrograms();
            navigation.setParams({ shouldRefresh: false });
        }
    }, [route?.params?.shouldRefresh]);
    useEffect(() => {
        dispatch(fetchPrograms())
            .then((res) => setProgramsList(res.payload.data))
            .catch((error) => console.error("Failed to fetch programs:", error));
    }, [dispatch]);
    const goToProgramInfoScreen = useCallback((item) =>
        navigation.navigate(ScreensName.ProgramInfo, { ...item }),
        [navigation]
    )
    // State updater
    const updateState = (request: UpdateStateRequest<keyof InitialState>) => {  // Function: To Update the state
        if (Array.isArray(request)) {
            request.forEach(({ key, value }) =>
                setState((preState) => ({ ...preState, [key]: value }))
            );
        } else {
            const { key, value } = request;
            setState((preState) => ({ ...preState, [key]: value }));
        }
    };
    return {
        refetchPrograms,
        updateState,
        state,
        programsList,
        handleGoBack,
        handleEditBtn,
        handleCreateProgram,
        goToProgramInfoScreen
    }
}

export default usePrograms