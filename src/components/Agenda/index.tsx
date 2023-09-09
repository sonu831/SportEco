import moment, { Moment } from "moment";
import React from "react";
import { Agenda, DateData } from "react-native-calendars";
import { Colors } from "../../constants/Colors";
import RenderEmptyData from "./RenderEmptyData";
import RenderList from "./RenderList";

const Theme = {
  selectedDayBackgroundColor: Colors.orange,
  selectedDayTextColor: Colors.white,
  dotColor: Colors.orange,
  dayTextColor: Colors.calendarDayColor,
  todayTextColor: Colors.calendarDayColor,
};

type CustomAgendaProps = {
  value?: Moment | undefined;
  onChange?: ((date: DateData) => void) | undefined;
};

const CustomAgenda = ({ value, onChange }: CustomAgendaProps) => {
  return (
    <Agenda
      items={{
        "2023-03-12": [{ name: "item 1 - any js object", height: 80, day: "" }],
        "2023-03-13": [{ name: "item 2 - any js object", height: 80, day: "" }],
        "2023-03-14": [],
        "2023-03-15": [
          { name: "item 3 - any js object", height: 80, day: "" },
          { name: "any js object", height: 80, day: "" },
        ],
      }}
      renderList={(listProps) => (
        <RenderList listProps={listProps} selectedDay={value} />
      )}
      theme={Theme}
      showOnlySelectedDayItems={true}
      renderEmptyData={() => <RenderEmptyData />}
      onDayPress={onChange}
    />
  );
};

export default CustomAgenda;
