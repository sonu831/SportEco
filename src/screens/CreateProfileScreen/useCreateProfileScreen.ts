import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerDetails$ } from "../../store/players/selectors";
import { RootStackParamList } from "../Navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppDispatch } from "../../store";
import { User } from "../../types/User";
import { UpdateStateRequest } from "../../types/UpdateState";
import { InitialState, OptionType, StepType } from "./config";
import { updateUserProfile } from "../../services/users";
import moment from "moment";

const initialState = {
  fName: "",
  lName: "",
  mName: "",
  email: "",
  dobMonth: "",
  dobDate: "",
  dobYear: "",
  gender: "",
  selectedCity: "",
  selectedState: "",
  role: [],
  image: "",
  idProof: undefined,
};

// 2. Add an array of steps
const steps: StepType[] = [
  { step: 1, title: "Name Details" },
  { step: 2, title: "Gender" },
  { step: 3, title: "Date of Birth" },
  { step: 4, title: "Select City" },
  { step: 5, title: "Profile Photo" },
];

const useCreateProfileScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
}) => {
  const isAddPlayer = false;
  const isEdit = false;
  const dispatch = useDispatch<AppDispatch>();
  const [response, setResponse] = useState<any>(null);
  const [state, setState] = useState<InitialState>(initialState);

  // 3. Add a new state to track current step
  const [currentStep, setCurrentStep] = useState(1);

  const handleGoBack = () => {
    // Move to next step
    console.log("render state", currentStep);
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // Adjust the save function
  const handleSave = () => {
    // Move to next step
    console.log("render state", currentStep);
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    if (currentStep == 5) {
      const request = {
        data: {
          first_name: state.fName,
          last_name: state.lName,
          middle_name: state.mName,
          email: state.email,
          DOB: {
            date: moment(state.dobDate).format("D"),
            month: moment(state.dobDate).format("MMMM"),
            year: moment(state.dobDate).format("YYYY"),
          },
          gender: state.gender,
          city: state.selectedCity,
          state: state.selectedState,
          role: [],
        },
      };
      dispatch(updateUserProfile(request)).then((res) => {
        // const { data = {} } = res.payload;
        console.log("========");
        console.log("=======res ========", res);
        console.log("========");
      });
    }
  };

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

  return {
    currentStep,
    uploadImage: () => {},
    userDetails: [],
    state,
    handleSave,
    handleGoBack,
    updateState,
  };
};

export default useCreateProfileScreen;
