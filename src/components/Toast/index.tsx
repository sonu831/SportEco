import React, { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../store/Toast/reducers";
import { toastDetail$ } from "../../store/Toast/selectors";

const CustomToast = () => {
  const toastDetails = useSelector(toastDetail$);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toastDetails && toastDetails?.message && toastDetails?.type) {
      Toast.show({
        type: toastDetails?.type,
        text1: toastDetails?.message,
      });
    }
  }, [toastDetails]);

  return (
    <Toast
      topOffset={80}
      visibilityTime={2500}
      onHide={() => dispatch(setToast({}))}
    />
  );
};

export default CustomToast;
