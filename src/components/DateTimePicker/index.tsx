import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  View,
} from "react-native";
import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useDateTimePicker from "./useDateTimePicker";
import { Moment } from "moment";
import { styles } from "./styles";
import { TextInputComponent } from "../TextInput";
import { TextInput } from "..";
import moment from "moment";

type DateTimePickerProps = {
  type: "date" | "time" | "datetime";
  value: Moment;
  onChange: any;
  formatToShow?: string;
  dateBoxField?: boolean;
  classNames?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const DateTimePicker = ({
  type = "date",
  value,
  onChange,
  formatToShow,
  classNames,
  dateBoxField = false,
  disabled = false,
}: DateTimePickerProps) => {
  const { state, handleConfirm, handleShowDatePicker, hideDatePicker } =
    useDateTimePicker({ value, onChange });
  const { date, showDatePicker } = state;

  return (
    <>
      <TouchableOpacity
        style={[
          styles.w195,
          styles.timeInputContainer,
          classNames,
          dateBoxField && styles.dateBoxContainer,
        ]}
        onPress={!disabled ? handleShowDatePicker : () => {}}
      >
        {dateBoxField ? (
          <View style={styles.dateContainer}>
            <View style={styles.dateWrapper}>
              <Text>{moment(date).format("D") ?? "Day"}</Text>
            </View>
            <View style={[styles.dateWrapper, styles.monthDateWrapper]}>
              <Text>{moment(date).format("MMMM") ?? "Month"}</Text>
            </View>
            <View style={styles.dateWrapper}>
              <Text>{moment(date).format("YYYY") ?? "Year"}</Text>
            </View>
          </View>
        ) : (
          <Text>{date?.format(formatToShow)}</Text>
        )}
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode={type}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={date?.toDate()}
      />
    </>
  );
};

export default DateTimePicker;
