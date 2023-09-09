import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const RenderEmptyData = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>No Events Scheduled for today</Text>
    </View>
  );
};

export default RenderEmptyData;
