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

const useChangeAvatar = ({
    navigation,
    route,
}: {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        undefined
    >;
    route: RouteProp<RootStackParamList, "ChangeAvatar">;
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const userDetails = useSelector(userDetails$);
    const playerDetails: Partial<PlayerDefinition> = useSelector(playerDetails$);
    const [state, setState] = useState<Partial<InitialState>>(initialState);

    const { showConfirmation } = state;

    const handleGoBack = () => navigation.goBack();

    const handleEditBtn = () => navigation.navigate("ChangeAvatar");
    return {
        userDetails,
        handleGoBack,
        handleEditBtn,
        state,
    };
};

export default useChangeAvatar