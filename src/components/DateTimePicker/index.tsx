import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  View,
} from "react-native";
import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from "react-native-paper";
import useDateTimePicker from "./useDateTimePicker";
import { Moment } from "moment";
import { styles } from "./styles";
import { TextInputComponent } from "../TextInput";
// import { TextInput } from "..";
import moment from "moment";

type DateTimePickerProps = {
  type: "date" | "time" | "datetime";
  value: Moment;
  onChange: any;
  formatToShow?: string;
  dateBoxField?: boolean;
  classNames?: StyleProp<ViewStyle>;
  disabled?: boolean;
  editable?: boolean;
};

const DateTimePicker = ({
  type = "date",
  value,
  onChange,
  formatToShow,
  classNames,
  dateBoxField = false,
  disabled = false,
  editable = true,
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
        onPress={!disabled && editable ? handleShowDatePicker : () => {}}
      >
        {dateBoxField ? (
          <View style={styles.dateContainer}>
            <TextInput
              mode="outlined"
              label="Date of Birth"
              placeholder="Date of Birth"
              activeOutlineColor="grey"
              placeholderTextColor={"#000"}
              value={date?.format("MM-DD-YYYY") ?? ""}
              style={{
                width: "100%",
              }}
              onTouchStart={editable ? handleShowDatePicker : undefined}
              editable={editable}
            />
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
