import { useDispatch, useSelector } from "react-redux";
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
  addPlayer,
  uploadPlayerProfilePicture,
  updatePlayerProfile,
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
    const request = {
      first_name: firstName,
      last_name: lastName,
      dbo: dob,
      gender: selectedOption,
      phonenumber: phoneNumber,
      avatarimage: avatarImage,
      profile_pic: profilePic,
    };
    if (isEdit) {
      console.log("editplayerpayload", request, playerId);
      dispatch(
        updatePlayerProfile({ player: request, playerId: playerId })
      ).then((res) => {
        navigation.replace("Players");
      });
    } else {
      console.log("add player request", request);
      dispatch(addPlayer({ data: request })).then((res) => {
        if (res.payload?.data?._id) {
          navigation.replace("Players");
        }
      });
    }
  };

  const updateState = (request: { key: keyof InitialState; value: any }) => {
    const { key, value } = request;
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleEditBtn = () => navigation.navigate("MyAccount");

  const handleUploadImage = (image: string) => {
    const formData = new FormData();

    formData.append("profile_pic", {
      uri: image,
      name: "profile_pic", // You can change the name as needed
      type: "image/jpeg", // Adjust the type based on your image format
    });
    // Implementation for uploading image
    dispatch(uploadUserProfilePicture(formData)).then((res) => {});
    console.log("handleUploadImage", image);
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
      if (_id && first_name && last_name) {
        setPlayerDetailsState((prev) => ({
          ...prev,
          firstName: first_name,
          lastName: last_name,
          phoneNumber: phonenumber,
          avatarImage: avatarimage,
          profilePic: profile_pic,
          dob: dbo,
          selectedOption: gender,
          playerId: route.params.playerId,
        }));
      }
      setIsEdit(true);
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