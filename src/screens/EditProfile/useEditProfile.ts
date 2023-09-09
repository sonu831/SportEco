import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  citiesByState$,
  countryState$,
  userDetails$,
} from "../../store/users/selectors";
import { playerDetails$ } from "../../store/players/selectors";
import {
  fetchUserById,
  getAllStates,
  getSelectedCityByState,
  updateUserProfile,
  uploadUserProfilePicture,
} from "../../services/users";
import { RootStackParamList } from "../Navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppDispatch } from "../../store";
import { RouteProp } from "@react-navigation/native";
import { FileUploadResponse } from "../../types/FileUpload";
import { User } from "../../types/User";
import { UpdateStateRequest } from "../../types/UpdateState";
import {
  addPlayer,
  fetchPlayers,
  uploadPlayerProfilePicture,
  updatePlayerProfile,
} from "../../services/players";

import group902 from "../../assets/images/group902.png";
import group904 from "../../assets/images/group904.png";
import group905 from "../../assets/images/group905.png";
import group908 from "../../assets/images/group908.png";
import group907 from "../../assets/images/group907.png";
import group909 from "../../assets/images/group909.png";

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
  fName: string;
  lName: string;
  mName: string;
  gender: string;
  selectedCity: string;
  selectedState: string;
  role: string[];
  image: string;
  idProof?: FileUploadResponse;
  phNum: string;
  dobDate: string;
};

const initialState = {
  fName: "",
  lName: "",
  mName: "",
  dobDate: "",
  gender: "",
  selectedCity: "",
  selectedState: "",
  phNum: "",
  role: [],
  image: undefined,
  idProof: undefined,
};

export type OptionType = {
  label: string;
  value: string;
};

const useEditProfile = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "EditProfile",
    undefined
  >;
  route: RouteProp<RootStackParamList, "EditProfile">;
}) => {
  const isAddPlayer = route?.params?.isAddPlayer || false;
  const [avatarImage, setAvatarImage] = useState<string>(initialAvatar[1]);
  const dispatch = useDispatch<AppDispatch>();
  const [response, setResponse] = useState<any>(null);
  const userDetails: Partial<User> = useSelector(userDetails$);
  const countryStates: OptionType[] = useSelector(countryState$);
  const citiesByState: OptionType[] = useSelector(citiesByState$);
  const playerDetails: Partial<User> = useSelector(playerDetails$);
  const [state, setState] = useState<InitialState>(initialState);
  const [isEdit, setIsEdit] = useState<boolean>(route?.params?.isEdit || false);

  const { selectedState } = state;

  console.log("userDetails", userDetails);

  const handleGoBack = () => navigation.goBack();

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

  const toggleProfileEditMode = () => {
    setIsEdit((prevState) => !prevState);
  };

  const uploadImage = useCallback((image: string) => {
    updateState({
      key: "image",
      value: image,
    });

    if (!!image) {
      fetch(image)
        .then(async (res) => {
          const data = await res.blob();

          const formData = new FormData();

          formData.append("profile_pic", data);

          if (!isAddPlayer)
            dispatch(
              uploadPlayerProfilePicture({
                formData,
                playerId: playerDetails?._id,
              })
            );
          else dispatch(uploadUserProfilePicture({ formData }));
        })
        .catch((err) => console.log("err", err));
    }
  }, []);

  const handleUploadID = useCallback((file: any) => {
    console.log("file", file);
    updateState({
      key: "idProof",
      value: file,
    });
  }, []);

  useEffect(() => {
    if (!isEdit) {
      const {
        gender,
        role,
        state,
        city,
        first_name,
        last_name,
        middle_name,
        contact_no,
      } = userDetails;

      updateState([
        { key: "fName", value: first_name || "" },
        { key: "lName", value: last_name || "" },
        { key: "mName", value: middle_name || "" },
        { key: "gender", value: gender || "" },
        { key: "role", value: role || [] },
        { key: "selectedState", value: state || "" },
        { key: "selectedCity", value: city || "" },
        { key: "phNum", value: contact_no || "" },
      ]);
    }
  }, [userDetails]);

  const handleSave = () => {
    const {
      fName,
      lName,
      mName,
      gender,
      role,
      selectedState: userState,
      selectedCity,
      dobDate,
      image,
    } = state;

    const request = {
      first_name: fName,
      last_name: lName,
      ...(isAddPlayer ? { contact_no: mName } : { middle_name: mName }),
      DOB: {
        date: dobDate,
      },
      gender: gender,
      city: selectedCity,
      state: userState,
      ...(!isAddPlayer && { role: role }),
    };

    if (isAddPlayer && !isEdit) {
      dispatch(addPlayer({ data: request })).then((res) => {
        const resData = res.payload?.data;

        if (!!image) {
          fetch(image)
            .then(async (imageRes) => {
              const data = await imageRes.blob();

              const formData = new FormData();

              formData.append("profile_pic", data);

              dispatch(
                uploadPlayerProfilePicture({
                  formData,
                  playerId: resData?._id,
                })
              ).then(() => dispatch(fetchPlayers()).then(() => handleGoBack()));
            })
            .catch((err) => console.log("err", err));
        } else {
          dispatch(fetchPlayers()).then(() => handleGoBack());
        }
      });
    } else if (isAddPlayer && isEdit) {
      dispatch(
        updatePlayerProfile({ data: request, playerId: playerDetails._id })
      ).then(() =>
        navigation.navigate("CommonScreen", {
          title: "Players",
          shouldRefresh: true,
        })
      );
    } else {
      dispatch(
        updateUserProfile({
          data: request,
        })
      ).then((res) => {
        dispatch(fetchUserById()).then(() =>
          isEdit ? handleGoBack() : navigation.navigate("Main")
        );
      });
    }
  };

  useEffect(() => {
    dispatch(getAllStates());
    dispatch(fetchUserById());
  }, []);

  useEffect(() => {
    if (selectedState?.length) {
      dispatch(getSelectedCityByState(selectedState));
    }
  }, [selectedState]);

  return {
    avatarImage,
    uploadImage,
    userDetails,
    updateState,
    state,
    handleSave,
    response,
    handleGoBack,
    handleUploadID,
    isAddPlayer,
    isEdit,
    countryStates,
    citiesByState,
    toggleProfileEditMode,
  };
};

export default useEditProfile;
