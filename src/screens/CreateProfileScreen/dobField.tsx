import React from "react";
import { View } from "react-native";
import { TitleText } from "../../components";
import { styles } from "./styles";
import DateTimePicker from "../../components/DateTimePicker";
import moment from "moment";

export const DOBField = ({ dobDate, dobMonth, dobYear, updateState }) => (
  <View style={[styles.fieldColumn]}>
    <TitleText
      text={`What's Your Date Of Birth?`}
      subtext="Let's mark your sports journey with your birthdate!"
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
