import { View, TouchableOpacity } from "react-native";
import React from "react";
import SafeArea from "../../components/SafeArea";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./styles";
import { Colors } from "../../constants/Colors";
import { RootStackScreenProps } from "../Navigation/types";
import useCalendarScreen from "./useCalendarScreen";
import Layout from "../../constants/Layout";
import CustomAgenda from "../../components/Agenda";
import moment from "moment";

const { window } = Layout;

const CalendarScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"CalendarScreen">) => {
  const { handleGoBack, updateState, state } = useCalendarScreen({
    navigation,
    route,
  });

  const { selectedDate } = state;

  return (
    <SafeArea classNames={styles.safeView}>
      <View style={[styles.containerView, styles.flex, { marginBottom: 20 }]}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
        </TouchableOpacity>
      </View>

      <CustomAgenda
        onChange={(value) =>
          updateState({
            key: "selectedDate",
            value: moment(value.dateString),
          })
        }
        value={selectedDate}
      />
    </SafeArea>
  );
};

export default CalendarScreen;
