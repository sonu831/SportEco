import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  deletePlayer,
  fetchPlayerById,
  updatePlayerProfile,
  addPlayerWithPic,
} from "../../../services/players";
import {
  InitialState,
  HandleDeletePlayerFunction,
  PlayerProfileManagerRouteProp,
  PlayerProfileManagerNavigationProp,
} from "./config";
import { AppDispatch } from "../../../store";
import { UpdateStateRequest } from "../../../types/UpdateState";
import ScreensName from "../../../constants/ScreenNames";
import { convertToCustomDateObject } from "../../../helper/dateTimeConversion";
import { initializePlayer, mapResponseToPlayerData } from "../../../helper";

// Constants and Initial States
const initialState: InitialState = {
  showConfirmation: false,
  showDatePicker: false,
  PlayerDetails: initializePlayer(),
  isEdit: false,
};

const usePlayerProfileManager = () => {
  const navigation = useNavigation<PlayerProfileManagerNavigationProp>();
  const route = useRoute<PlayerProfileManagerRouteProp>();

  const [state, setState] = useState<InitialState>(initialState);

  const dispatch = useDispatch<AppDispatch>();

  const {
    isEdit,
    PlayerDetails: {
      firstName,
      lastName,
      phoneNumber,
      selectedOption,
      avatarImage,
      dob,
      playerId,
      profilePic,
    },
  } = state;

  // Handlers
  const handleOptionPress = (option) => {
    setState((prev) => ({
      ...prev,
      PlayerDetails: {
        ...prev.PlayerDetails,
        selectedOption: option,
      },
    }));
  };

  const handleDOBConfirm = (selectedDate) => {
    const day = selectedDate.getDate().toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = selectedDate.getFullYear().toString();

    setState((prevState) => ({
      ...prevState,
      showDatePicker: false,
      PlayerDetails: {
        ...prevState.PlayerDetails,
        dob: { date: day, month, year },
      },
    }));
  };

  const handleToggleDatePicker = () => {
    setState((prev) => ({
      ...prev,
      showDatePicker: !prev.showDatePicker,
    }));
  };

  const goToPlayersScreen = () => {
    navigation.replace(ScreensName.Players, { shouldRefresh: true });
  };

  const handleDeletePlayer: HandleDeletePlayerFunction = () => {
    if (!route?.params?.id) return;
    dispatch(deletePlayer(route.params.id)).then(() => {
      goToPlayersScreen();
    });
  };

  const handlePlayer = () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("dbo", JSON.stringify(dob));
    formData.append("gender", selectedOption);
    formData.append("phonenumber", phoneNumber);

    if (profilePic) {
      formData.append("profile_pic", {
        uri: profilePic,
        type: "image/jpeg",
        name: "profile.jpg",
      });
      // formData.append("profile_pic", profilePic);
    } else {
      formData.append("avatarimage", avatarImage || "10");
    }

    const action = isEdit
      ? updatePlayerProfile({ player: formData, playerId })
      : addPlayerWithPic(formData);
    dispatch(action).then((res) => {
      if (res?.payload?.data?._id) {
        goToPlayersScreen();
      }
    });
  };

  const handleUploadImage = (image: string) => {
    setState((prevState) => ({
      ...prevState,
      PlayerDetails: {
        ...prevState.PlayerDetails,
        profilePic: image,
      },
    }));
  };

  const getPlayerById = (playerId: string) => {
    dispatch(fetchPlayerById(playerId)).then((res) => {
      const playerData = mapResponseToPlayerData(res.payload?.data);
      setState((prev) => ({
        ...prev,
        isEdit: true,
        PlayerDetails: playerData,
      }));
    });
  };

  useEffect(() => {
    if (route.params?.isEdit && route.params?.playerId?.length) {
      getPlayerById(route.params?.playerId);
    }
  }, [route.params?.isEdit]);

  return {
    state,
    handleToggleDatePicker,
    handleDOBConfirm,
    handleOptionPress,
    dispatch,
    handleDeletePlayer,
    handlePlayer,
    handleUploadImage,
    setState,
  };
};

export default usePlayerProfileManager;
