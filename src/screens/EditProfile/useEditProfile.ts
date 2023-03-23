import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails$ } from "../../store/users/selectors";
import { playerDetails$ } from "../../store/players/selectors";
import {
  fetchUserById,
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

type InitialState = {
  fName: string;
  lName: string;
  mName: string;
  email: string;
  dobMonth: string;
  dobDate: string;
  dobYear: string;
  gender: string;
  city: string;
  state: string;
  role: string[];
  image: string;
  idProof?: FileUploadResponse;
};

const initialState = {
  fName: "",
  lName: "",
  mName: "",
  email: "",
  dobMonth: "",
  dobDate: "",
  dobYear: "",
  gender: "",
  city: "",
  state: "",
  role: [],
  image: "",
  idProof: undefined,
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
  const isEdit = route?.params?.isEdit || false;

  const dispatch = useDispatch<AppDispatch>();
  const [response, setResponse] = useState<any>(null);
  const userDetails: Partial<User> = useSelector(userDetails$);
  const playerDetails: Partial<User> = useSelector(playerDetails$);
  const [state, setState] = useState<InitialState>(initialState);

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
    if (isEdit) {
      const {
        email,
        gender,
        role,
        state,
        city,
        first_name,
        last_name,
        middle_name,
      } = isAddPlayer ? playerDetails : userDetails;

      updateState([
        { key: "email", value: email || "" },
        { key: "fName", value: first_name || "" },
        { key: "lName", value: last_name || "" },
        { key: "mName", value: middle_name || "" },
        { key: "gender", value: gender || "" },
        { key: "role", value: role || [] },
        { key: "state", value: state || "" },
        { key: "city", value: city || "" },
      ]);
    }
  }, [userDetails]);

  const handleSave = () => {
    const {
      email,
      fName,
      lName,
      mName,
      gender,
      role,
      state: userState,
      city,
      dobMonth,
      dobDate,
      dobYear,
      image,
    } = state;

    const request = {
      first_name: fName,
      last_name: lName,
      ...(isAddPlayer ? { contact_no: mName } : { middle_name: mName }),
      DOB: {
        date: dobDate,
        month: dobMonth,
        year: dobYear,
      },
      email: email?.toLowerCase(),
      gender: gender,
      city: city,
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

  return {
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
  };
};

export default useEditProfile;
