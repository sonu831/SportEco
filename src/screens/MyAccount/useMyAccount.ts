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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setIsLoginVerified, setIsVerified } from "../../store/users/reducers";
import { fetchUserById, getAllStates } from "../../services/users";
import group902 from "../../assets/images/group902.png";
import group904 from "../../assets/images/group904.png";
import group905 from "../../assets/images/group905.png";
import group908 from "../../assets/images/group908.png";
import group907 from "../../assets/images/group907.png";
import group909 from "../../assets/images/group909.png";
import { findIndexByValue } from "../../utils/methods";

type AvatarMap = {
  [key: number]: string;
};

const initialAvatar: AvatarMap = {
  1: group902,
  2: group904,
  3: group905,
  4: group908,
  5: group907,
  6: group909,
};

type InitialState = {
  showConfirmation: boolean;
  avatarImage?: number;
};

const initialState = {
  showConfirmation: false,
  avatarImage: null,
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

  useEffect(() => {
    if (userDetails?.avatarimage) {
      const index = findIndexByValue(initialAvatar, userDetails?.avatarimage);
      updateState({
        key: "avatarImage",
        value: initialAvatar[index],
      });
    }
  }, [userDetails?.avatarimage]);

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

  const handleLogout = () => {
    // Clear local storage data (e.g., AsyncStorage, SecureStore)
    AsyncStorage.clear().then(() => {
      dispatch(setIsVerified(false));
      dispatch(setIsLoginVerified(false));
      navigation.navigate("Verification");
    });

    // Reset the app state or navigate to the login page
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, []);

  const handleEditBtn = () => navigation.navigate("MyAccount");
  return {
    userDetails,
    handleGoBack,
    handleEditBtn,
    updateState,
    handleLogout,
    state,
  };
};

export default useMyAccount;
