import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { userDetails$ } from "../../store/users/selectors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { BatchData, InitialState, } from "./config";
import { fetchBatchById, fetchBatches } from "../../services/batches";
import { UpdateStateRequest } from "../../types/UpdateState";
import { fetchPlayers } from "../../services/players";

const initialState = {
    showConfirmation: false,
    batchList: [],
};

const useBatches = ({
    navigation,
    route
}: {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        undefined
    >;
    route: RouteProp<RootStackParamList, "Batches">;
}) => {
    const dispatch = useDispatch<AppDispatch>(); // var
    const [state, setState] = useState<Partial<InitialState>>(initialState); // useState
    const [batchProfileResponse, setBatchProfileResponse] = useState<BatchData>();
    const [playersList, setPlayersList] = useState([])
    const handleGoBack = () => navigation.goBack();  // Function : Navigation
    const handleEditBtn = () => navigation.navigate("MyAccount");  // Function : Navigation
    useEffect(() => { // useEffect : To Fetch batches Data
        if (!route?.params?.id) return;
        dispatch(fetchBatchById(route.params.id)).then((res) => {
            setBatchProfileResponse(res?.payload?.data);
        });
    }, []);
    useEffect(() => {
        dispatch(fetchPlayers()).then((res) =>
            setPlayersList(res?.payload?.data)
        );
    }, [dispatch]);
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
    useEffect(() => { // useEffect: To fetch the baches list
        dispatch(fetchBatches()).then((res) =>
            updateState({ key: "batchList", value: res?.payload?.data ?? [] })
        );
    }, [dispatch]);
    return {
        updateState,
        state,
        batchProfileResponse,
        handleGoBack,
        handleEditBtn,
        playersList
    }
}


export default useBatches
