import {
  fetchUserById,
  registerUser,
  validateOtp,
} from "./../../services/users";
import { phNumRegex, mockCode } from "./../../constants/index";
import { useRef, useState } from "react";
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { customStyle } from "./style";
import Layout from "../../constants/Layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { UpdateStateRequest } from "../../types/UpdateState";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { setIsLoginVerified, setIsVerified } from "../../store/users/reducers";
import { setToast } from "../../store/Toast/reducers";

const CELL_COUNT = 6;
const { window } = Layout;

type InitialStateType = {
  phNum: string;
  codeSent: boolean;
  accountVerified: boolean;
  invalidCode: boolean;
  codeToValidate: string;
};

const initialState = {
  phNum: "",
  codeSent: false,
  accountVerified: false,
  invalidCode: false,
  codeToValidate: "",
};

export const useVerificationScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const styles = customStyle({ window });
  const [state, setState] = useState<InitialStateType>(initialState);
  const phoneInput = useRef(null);
  const [validationCode, setValidationCode] = useState<string>("");
  const validCodeRef = useBlurOnFulfill({
    value: validationCode,
    cellCount: CELL_COUNT,
  });
  const [codeProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: validationCode,
    setValue: setValidationCode,
  });
  const { phNum, codeToValidate } = state;

  // const transaction = Sentry.startTransaction({
  //   name: "test-on-OTP-verification",
  // });
  // const span = transaction.startChild({
  //   op: "on-otp-verification",
  // });

  const updateState = (request: UpdateStateRequest<keyof InitialStateType>) => {
    if (Array.isArray(request)) {
      request.forEach(({ key, value }) =>
        setState((preState) => ({ ...preState, [key]: value }))
      );
    } else {
      const { key, value } = request;
      setState((preState) => ({ ...preState, [key]: value }));
    }
  };

  const isPhNumValid = () => phNumRegex.test(phNum);

  const handleCreateAccount = () => {
    const request = {
      phNum,
    };
    // updateState([
    //   {
    //     key: "codeToValidate",
    //     value: 2342,
    //   },
    //   {
    //     key: "codeSent",
    //     value: true,
    //   },
    // ]);
    //setValidationCode("2342");
    dispatch(registerUser(request)).then((res) => {
      const { data = {} } = res.payload;
      console.log("data otp", data.otp);
      if (!!data.otp) {
        updateState([
          {
            key: "codeToValidate",
            value: data.otp,
          },
          {
            key: "codeSent",
            value: true,
          },
        ]);
        setValidationCode(!!data?.otp ? String(data.otp) : "");
      }
    });
  };

  const navigateToScreen = (isUserExist: boolean) => {
    dispatch(setIsVerified(true));
    dispatch(setIsLoginVerified(true));
    console.log("finalk redirect to CreateProfile");
    if (isUserExist) {
      navigation.navigate("BottomTabNavigation");
      return;
    }
    navigation.navigate("CreateProfile");
  };

  const handleOTPValidation = () => {
    const isEnterCodeValid = validationCode === codeToValidate.toString();

    if (isEnterCodeValid) {
      const request = {
        contact_no: phNum,
        otp: codeToValidate,
      };
      // span.finish(); // Remember that only finished spans will be sent with the transaction
      // transaction.finish(); // Finishing the transaction will send it to Sentry
      dispatch(validateOtp(request))
        .then((res) => {
          const isUserExist = res.payload.redirecttodashboard;

          if (isUserExist)
            dispatch(fetchUserById()).then(() => navigateToScreen(isUserExist));
          else navigateToScreen(false);
        })
        .catch(() => {
          setToast({
            type: "error",
            message: "Something went wrong",
          });
        });
    } else {
      updateState({
        key: "invalidCode",
        value: true,
      });
      // setValidationCode("");
    }
  };

  return {
    validCodeRef,
    codeProps,
    getCellOnLayoutHandler,
    validationCode,
    setValidationCode,
    phoneInput,
    styles,
    isPhNumValid,
    handleCreateAccount,
    updateState,
    state,
    handleOTPValidation,
  };
};
