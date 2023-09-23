// import { Image, TouchableOpacity, View } from "react-native";
// import { BottomTabBar } from "../../constants/BottomTabBar";
// import { useNavigation } from "@react-navigation/native";
// import { styles } from "./styles";

// const BottomTabNavigation = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.tabBarStyle}>
//       {BottomTabBar({ navigation }).map((tab, tabIndex) => {
//         return (
//           <TouchableOpacity key={tabIndex} onPress={tab.onPress}>
//             <Image source={tab.tabBarIcon} />
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// export default BottomTabNavigation;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MainScreen from "../MainScreen";

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Foundation
                name="home"
                size={24}
                color={focused ? "#F1592A" : "#fff"}
              />
              <Text
                style={{
                  color: "#fff",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="chatbox-outline"
                size={24}
                color={focused ? "#F1592A" : "#fff"}
              />
              <Text
                style={{
                  color: "#fff",
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="grid"
                size={24}
                color={focused ? "#F1592A" : "#fff"}
              />
              <Text
                style={{
                  color: "#fff",
                }}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name="calendar"
                size={24}
                color={focused ? "#F1592A" : "#fff"}
              />
              <Text
                style={{
                  color: "#fff",
                }}
              >
                Calendar
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat</Text>
    </View>
  );
}
function Explore() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Explore</Text>
    </View>
  );
}
function Calendar() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Calendar</Text>
    </View>
  );
}
