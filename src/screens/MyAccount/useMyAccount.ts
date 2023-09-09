import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { userDetails$ } from "../../store/users/selectors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { deletePlayer } from "../../services/players";
import { playerDetails$ } from "../../store/players/selectors";
import { PlayerDefinition } from "../../types/player";
import { UpdateStateRequest } from "../../types/UpdateState";


type InitialState = {
    showConfirmation: boolean;
};

const initialState = {
    showConfirmation: false,
};

const useMyAccount = ({
    navigation,
    route,
}: {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        undefined
    >;
    route: RouteProp<RootStackParamList, "MyAccount">;
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const userDetails = useSelector(userDetails$);
    const playerDetails: Partial<PlayerDefinition> = useSelector(playerDetails$);
    const [state, setState] = useState<Partial<InitialState>>(initialState);

    const { showConfirmation } = state;

    const updateState = (request: UpdateStateRequest<keyof InitialState>) => {
        if (Array.isArray(request)) {
            request.forEach(({ key, value }) =>
                setState((preState) => ({ ...preState, [key]: value }))
            );
        } else {
            const { key, value } = request;
            setState((preState) => ({ ...preState, [key]: value }));
        }
    };

    const handleGoBack = () => navigation.goBack();

    const handleEditBtn = () => navigation.navigate("MyAccount");
    return {
        userDetails,
        handleGoBack,
        handleEditBtn,
        updateState,
        state,
    };
};

export default useMyAccount