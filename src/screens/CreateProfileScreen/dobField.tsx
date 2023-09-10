import React from "react";
import { View } from "react-native";
import { TitleText } from "../../components";
import { styles } from "./styles";
import DateTimePicker from "../../components/DateTimePicker";
import moment, { Moment } from "moment";

interface DOBFieldProps {
  dobDate: Moment; // Assuming dobDate is a JavaScript Date object. Modify the type as needed.
  updateState: (data: { key: string; value: any }) => void; // Assuming updateState is a function that takes an object with key and value. Modify as needed.
}

export const DOBField: React.FC<DOBFieldProps> = ({ dobDate, updateState }) => (
  <View style={[styles.fieldColumn]}>
    <TitleText
      text={`What's Your Date Of Birth?`}
      subtext="This helps us personalize your experience."
      style={styles.pb30}
    />
    <DateTimePicker
      type="date"
      value={dobDate}
      onChange={(value: any) =>
        updateState({
          key: "dobDate",
          value: moment(value),
        })
      }
      dateBoxField
    />
  </View>
);
