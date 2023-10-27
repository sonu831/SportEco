import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { userDetails$ } from "../../../store/users/selectors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import {
  deletePlayer,
  fetchPlayerById,
  fetchPlayers,
  searchPlayer,
  uploadPlayerProfilePicture,
  updatePlayerProfile,
  addPlayerWithPic,
} from "../../../services/players";
import { playerDetails$ } from "../../../store/players/selectors";
import {
  InitialState,
  PlayerData,
  PlayerProfileState,
  HandleDeletePlayerFunction,
} from "./config";
import { uploadUserProfilePicture } from "../../../services/users";

// Constants and Initial States
const initialState = {
  showConfirmation: false,
  playerList: [],
};
const options = [
  { label: "Male", icon: "male" },
  { label: "Female", icon: "female-sharp" },
  { label: "Other", icon: "add" },
];

const usePlayerProfileManager = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "Players">;
}) => {
  const dispatch = useDispatch();
  const userDetails = useSelector(userDetails$);
  const playerDetails = useSelector(playerDetails$);
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const [playerProfileResponse, setPlayerProfileResponse] =
    useState<PlayerData>();
  const [playerDetailsState, setPlayerDetailsState] =
    useState<PlayerProfileState>({
      playerId: null,
      firstName: "",
      lastName: "",
      dob: { date: "", month: "", year: "" },
      phoneNumber: "",
      isDatePickerVisible: false,
      selectedOption: options[0].label,
      selectedDate: new Date(),
      avatarImage: null,
      profilePic: null,
    });
  const [isEdit, setIsEdit] = useState(false);
  const {
    firstName,
    lastName,
    phoneNumber,
    selectedOption,
    avatarImage,
    dob,
    playerId,
    profilePic,
  } = playerDetailsState;

  // Handlers
  const handleOptionPress = (option) => {
    setPlayerDetailsState((prev) => ({ ...prev, selectedOption: option }));
  };

  const handleDOBConfirm = (date) => {
    // Extract day, month, and year from the date
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString(); // Months are 0-based in JS Date
    const year = date.getFullYear().toString();

    setPlayerDetailsState((prev) => ({
      ...prev,
      isDatePickerVisible: !prev.isDatePickerVisible,
      selectedDate: date,
      dob: {
        date: day,
        month: month,
        year: year,
      },
    }));
  };

  const handleToggleDatePicker = () => {
    setPlayerDetailsState((prev) => ({
      ...prev,
      isDatePickerVisible: !prev.isDatePickerVisible,
    }));
  };

  const handleDeletePlayer: HandleDeletePlayerFunction = () => {
    if (!route?.params?.id) return;
    dispatch(deletePlayer(route.params.id)).then(() => {
      navigation.navigate("Players");
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
        navigation.replace("Players");
      }
    });
  };

  const updateState = (request: { key: keyof InitialState; value: any }) => {
    const { key, value } = request;
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleEditBtn = () => navigation.navigate("MyAccount");

  const handleUploadImage = (image: string) => {
    setPlayerDetailsState({ ...playerDetailsState, profilePic: image });
  };

  // Effects
  useEffect(() => {
    if (!route?.params?.id) return;
    dispatch(fetchPlayerById(route.params.id)).then((res) => {
      setPlayerProfileResponse(res?.payload?.data);
    });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchPlayers()).then((res) => {
  //     updateState({ key: "playerList", value: res?.payload?.data ?? [] });
  //   });
  // }, [dispatch]);

  useEffect(() => {
    if (route?.params?.isEdit) {
      const {
        _id,
        first_name,
        last_name,
        phonenumber,
        profile_pic,
        avatarimage,
        dbo,
        gender,
      } = route.params.playerData;
      if (!isEmpty(_id)) {
        setPlayerDetailsState((prev) => ({
          ...prev,
          firstName: first_name,
          lastName: last_name,
          phoneNumber: phonenumber,
          avatarImage: avatarimage,
          profilePic: profile_pic,
          dob: dbo,
          selectedOption: gender,
          playerId: _id || route.params.playerId,
        }));
        setIsEdit(true);
      }
    } else {
      setIsEdit(false);
    }
  }, []);

  return {
    handleToggleDatePicker,
    options,
    handleDOBConfirm,
    playerDetailsState,
    setPlayerDetailsState,
    handleOptionPress,
    dispatch,
    userDetails,
    handleEditBtn,
    updateState,
    state,
    playerProfileResponse,
    handleDeletePlayer,
    handlePlayer,
    handleUploadImage,
    isEdit,
  };
};

export default usePlayerProfileManager;
