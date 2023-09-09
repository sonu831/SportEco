import { UpdateState } from "./interface";
import { useState } from "react";

const initialState = {
  searchedText: "",
};

const useMainScreen = () => {
  const [state, setState] = useState(initialState);

  const updateState: UpdateState = (props) => {
    if (Array.isArray(props)) {
      props.forEach(({ key, value }) => {
        setState((preState) => ({
          ...preState,
          [key]: value,
        }));
      });
    } else {
      const { key, value } = props;

      setState((preState) => ({
        ...preState,
        [key]: value,
      }));
    }
  };

  return {
    updateState,
    state,
  };
};

export default useMainScreen;
