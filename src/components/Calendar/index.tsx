import {Text} from 'react-native';
import React from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import Layout from '../../constants/Layout';
import moment, {Moment} from 'moment';
import {Colors} from '../../constants/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import XDate from 'xdate';

const {window} = Layout;

type CustomCalendarProps = {
  value?: Moment | undefined;
  onChange?: ((date: DateData) => void) | undefined;
};

const Theme = {
  calendarBackground: 'transparent',
  dayTextColor: Colors.calendarDayColor,
  todayTextColor: Colors.calendarDayColor,
  selectedDayBackgroundColor: Colors.orange,
  selectedDayTextColor: Colors.white,
  textSectionTitleColor: Colors.calendarDayColor,
};

const CustomCalendar = ({value, onChange}: CustomCalendarProps) => {
  const markedDates = {
    [moment(value).format('YYYY-MM-DD')]: {
      selected: true,
    },
  };

  return (
    <Calendar
      onDayPress={onChange}
      date={moment(value).format('YYYY-MM-DD')}
      markedDates={markedDates}
      hideExtraDays={true}
      theme={Theme}
      renderHeader={RenderHeader}
      renderArrow={props => (
        <EvilIcons
          name={`chevron-${props}`}
          size={24}
          color={Colors.darkGray}
        />
      )}
      style={{
        borderRadius: 10,
        backgroundColor: Colors.calendarBgColor,
        width: window.width * 0.8,
      }}
    />
  );
};

const RenderHeader = (date: XDate | undefined) => {
  if (date) {
    const headerValue = new XDate(date);

    return (
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
        {headerValue.toString('MMMM yyyy')}
      </Text>
    );
  }
};

export default CustomCalendar;
