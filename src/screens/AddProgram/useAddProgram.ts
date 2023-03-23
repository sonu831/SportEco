import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPrograms, updateProgram } from "../../services/programs";
import { AppDispatch } from "../../store";
import {
  removeSession,
  setSessionForEdit,
} from "../../store/programs/reducers";
import {
  selectedProgramDetails$,
  sessions$,
} from "../../store/programs/selectors";
import { UpdateStateRequest } from "../../types/UpdateState";
import { RootStackParamList } from "../Navigation/types";

type InitialState = {
  programName: string | undefined;
  description: string | undefined;
};

const initialState = {
  programName: "",
  description: "",
};

const useAddProgram = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "AddProgram">;
}) => {
  const isEdit = route.params?.isEdit;
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<Partial<InitialState>>(initialState);
  const sessions = useSelector(sessions$);
  const selectedProgram = useSelector(selectedProgramDetails$);

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

  const handleSave = () => {
    const { description, programName } = state;

    const request = {
      program_name: programName,
      description: description,
      sessions: sessions.map((session) => ({
        sesionname: session.name || session.sesionname,
        sessiondesc: session.description || session.sessiondesc,
        sessionduration: session.duration,
      })),
    };

    if (isEdit) {
      dispatch(updateProgram({ data: request, id: selectedProgram?._id })).then(
        () => {
          dispatch(setSessionForEdit([]));
          navigation.navigate("CommonScreen", {
            title: "Programs",
            shouldRefresh: true,
          });
        }
      );
    } else {
      dispatch(addPrograms({ data: request })).then(() =>
        navigation.navigate("CommonScreen", {
          title: "Programs",
          shouldRefresh: true,
        })
      );
    }
  };

  const handleDeleteSession = (id: any) => {
    dispatch(removeSession(id));
  };

  useEffect(() => {
    const reset = () => {
      dispatch(setSessionForEdit([]));
    };

    if (isEdit && selectedProgram?._id) {
      updateState([
        {
          key: "programName",
          value: selectedProgram?.program_name,
        },
        {
          key: "description",
          value: selectedProgram?.description,
        },
      ]);

      dispatch(setSessionForEdit(selectedProgram?.sessions));
    }

    return () => reset();
  }, [isEdit, selectedProgram]);

  return {
    state,
    updateState,
    handleSave,
    handleGoBack,
    sessions,
    handleDeleteSession,
  };
};

export default useAddProgram;
