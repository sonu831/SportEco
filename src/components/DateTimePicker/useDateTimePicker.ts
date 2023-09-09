import { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { UpdateStateRequest } from "../../types/UpdateState";

type InitialState = {
  date: Moment | undefined;
  showDatePicker: boolean;
};

type Props = {
  value: Moment;
  onChange: any;
};

const initialState = {
  date: moment(),
  showDatePicker: false,
};

const useDateTimePicker = ({ value, onChange }: Props) => {
  const [state, setState] = useState<Partial<InitialState>>(initialState);

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

  const handleShowDatePicker = () => {
    updateState({
      key: "showDatePicker",
      value: true,
    });
  };

  const hideDatePicker = () => {
    updateState({
      key: "showDatePicker",
      value: false,
    });
  };

  const handleConfirm = (date: any) => {
    updateState({
      key: "date",
      value: moment(date),
    });
    onChange(date);
    hideDatePicker();
  };

  useEffect(() => {
    if (!!value) {
      updateState({
        key: "date",
        value: moment(value),
      });
    }
  }, []);

  return {
    state,
    updateState,
    handleConfirm,
    handleShowDatePicker,
    hideDatePicker,
  };
};

export default useDateTimePicker;
