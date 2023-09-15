import { View, Text, FlatList, TouchableOpacity, StyleSheet, ColorValue } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState([]);
  const data = [
    {
      id: 1,
      title: "Tournament Registration",
      desc: "Secure your spot and compete with the best!",
      time: "Today, 7:00 PM",
    },
    {
      id: 2,
      title: "Training Program",
      desc: "Join our latest training program to sharpen your techniques and become a stronger athlete.",
      time: "12 May 2023, 5:30 PM",
    },
    {
      id: 3,
      title: "Basketball Match",
      desc: "Get ready for the big game! Join us this weekend for an exhilarating match between rival teams.",
      time: "10 May, 9:17 AM",
    },
    {
      id: 4,
      title: "Important Meeting Reminder",
      desc: "Don't forget to attend the team strategy session tomorrow. Your presence is crucial.",
      time: "09 May, 2:30 PM",
    },
  ];
  const addNotification = (item) => {
    const isAlreadyIn = selectedNotification.findIndex((e) => e.id == item.id);
    if (isAlreadyIn > -1) {
      const filtered = selectedNotification.filter((e) => e.id != item.id);
      setSelectedNotification(filtered);
    } else {
      setSelectedNotification([...selectedNotification, item]);
    }
  };
  //UI
  return (
    <View style={styles.container}>
      <Header
        title="Notifications"
        hasActionIcon={selectedNotification.length > 0 ? true : false}
      />
      <View style={styles.mainView}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const isSelected = selectedNotification.findIndex(
              (e) => e.id == item.id
            );
            return (
              <TouchableOpacity
                onLongPress={() => addNotification(item)}
                onPress={() => {
                  if (selectedNotification.length > 0) {
                    addNotification(item);
                  }
                }}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 2,
                  backgroundColor: "#FFF",
                  borderWidth: isSelected > -1 ? 0.5 : 0,
                  padding: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#EEECEE",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 100,
                  }}
                >
                  <AntDesign name="calendar" size={24} />
                </View>
                <View style={{ marginLeft: 10, width: "80%" }}>
                  <Text
                    style={{
                      fontWeight: "800",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginVertical: 10,
                    }}
                  >
                    {item.desc}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};


export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  mainView: {
    padding: 20,
  },
});

interface headerProps {
  title: string;
  hasActionIcon?: boolean;
  backgroundColor: ColorValue;
}
const Header: React.FC<headerProps> = ({
  title,
  hasActionIcon,
  backgroundColor,
}) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: backgroundColor,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF",
          borderRadius: 100,
        }}
        onPress={goBack}
      >
        <Feather name="arrow-left-circle" size={30} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
        }}
      >
        {title}
      </Text>
      {hasActionIcon ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            padding: 8,
            borderRadius: 100,
          }}
        >
          <AntDesign name="delete" size={20} color={"#fff"} />
        </TouchableOpacity>
      ) : (
        <Text
          style={{
            color: "transparent",
          }}
        >
          h
        </Text>
      )}
    </View>
  );
};

