import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { userDetails$ } from "../../store/users/selectors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { InitialState, ProgramData, } from "./config";
import { fetchBatchById, fetchBatches } from "../../services/batches";
import { UpdateStateRequest } from "../../types/UpdateState";
import { fetchPlayers } from "../../services/players";
import { fetchPrograms } from "../../services/programs";

const initialState = {
    showConfirmation: false,
    batchList: [],
};

const usePrograms = ({
    navigation,
    route
}: {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        undefined
    >;
    route: RouteProp<RootStackParamList, "Programs">;
}) => {
    const dispatch = useDispatch<AppDispatch>(); // var
    const [state, setState] = useState<Partial<InitialState>>(initialState); // useState
    const [programProfileResponse, setProgramProfileResponse] = useState<ProgramData>();
    const [programList, setProgramList] = useState([])
    const handleGoBack = () => navigation.goBack();  // Function : Navigation
    const handleEditBtn = () => navigation.navigate("MyAccount");  // Function : Navigation
    useEffect(() => {
        refetchPrograms();
    }, []);
    const refetchPrograms = () => {
        // Call the function to refetch programs data
        dispatch(fetchPrograms()).then((res) => {
            // Update the state with the new programs data
            updateState({ key: "programList", value: res?.payload?.data ?? [] });
        });
    };
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
        programProfileResponse,
        handleGoBack,
        handleEditBtn,
    }
}


export default usePrograms
