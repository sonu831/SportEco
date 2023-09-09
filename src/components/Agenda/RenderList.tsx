import { View, Text, ScrollView } from "react-native";
import React, { useMemo } from "react";
import moment, { Moment } from "moment";
import Layout from "../../constants/Layout";
import { bottomNavigationHeight } from "../../constants";
import { Colors } from "../../constants/Colors";
import { ReservationListProps } from "react-native-calendars/src/agenda/reservation-list";

const { window } = Layout;

type RenderListProps = {
  listProps: ReservationListProps;
  selectedDay: Moment | undefined;
};

const mockData = [
  {
    id: 1,
    title: "I Accuse",
    start_time: "2023-02-23 01:49:29",
    end_time: "2022-10-29 02:35:15",
  },
  {
    id: 2,
    title: "Cannonball Run II",
    start_time: "2022-05-06 19:45:57",
    end_time: "2022-05-22 17:23:48",
  },
  {
    id: 3,
    title: "13 Assassins (Jûsan-nin no shikaku)",
    start_time: "2022-07-24 04:35:20",
    end_time: "2022-09-28 22:01:22",
  },
  {
    id: 4,
    title: "Time in the Minors",
    start_time: "2022-06-04 01:39:22",
    end_time: "2022-09-04 02:09:34",
  },
  {
    id: 5,
    title: "Brother, Can You Spare a Dime?",
    start_time: "2022-09-26 05:38:29",
    end_time: "2022-11-10 13:51:37",
  },
];

const RenderList = ({ listProps, selectedDay }: RenderListProps) => {
  const selectedDayItem = useMemo(
    () =>
      listProps.items
        ? listProps.items[moment(selectedDay).format("YYYY-MM-DD")]
        : [],
    [selectedDay]
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderBottomColor: Colors.shadowGray1,
          borderTopColor: Colors.shadowGray1,
          backgroundColor: Colors.white,
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", color: Colors.darkGray }}>
          My Events
        </Text>
      </View>
      <ScrollView
        style={{ minHeight: window.height - bottomNavigationHeight - 250 }}
      >
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 40,
            backgroundColor: Colors.white,
          }}
        >
          {mockData.map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  height: 60,
                  marginBottom: 32,
                }}
              >
                <View
                  style={{
                    marginRight: 20,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: Colors.gray }}>
                    {moment(e.start_time).format("HH:mm")}
                  </Text>
                  <Text style={{ color: Colors.gray }}>
                    {moment(e.end_time).format("HH:mm")}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: Colors.lightOrange,
                    flex: 1,
                    borderRadius: 14,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{e.title}</Text>
                </View>
              </View>
            );
          })}
          {/* {hours.map((e, i) => {
            return (
              <View style={{ marginVertical: 10 }} key={i}>
                <Text style={{ color: Colors.gray }}>
                  {moment(e).format("HH:mm")}
                </Text>
              </View>
            );
          })} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default RenderList;
