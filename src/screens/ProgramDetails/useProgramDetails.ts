import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectedProgramDetails$ } from "../../store/programs/selectors";
import { AppDispatch } from "../../store";
import { deleteProgram } from "../../services/programs";
import { UpdateStateRequest } from "../../types/UpdateState";

type InitialState = {
  showConfirmation: boolean;
};

const initialState = {
  showConfirmation: false,
};

const useProgramDetails = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "ProgramDetails">;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const programDetails = useSelector(selectedProgramDetails$);

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

  const handleDeleteProgram = () => {
    dispatch(deleteProgram({ programId: programDetails?._id })).then((res) => {
      updateState({
        key: "showConfirmation",
        value: false,
      });
      navigation.navigate("Confirmation", {
        label: "Deleted !",
        navigateTo: "CommonScreen",
        navigateOption: {
          title: "Programs",
          shouldRefresh: true,
        },
      });
    });
  };

  return {
    programDetails,
    handleGoBack,
    handleDeleteProgram,
    state,
    updateState,
  };
};

export default useProgramDetails;
