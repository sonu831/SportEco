import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MyText from "../../components/MyText";
import { Colors } from "../../constants/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const ViewAllTitle = ({ title, viewAllText = "View all" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MyText text={title} fontsize={18} fontFamily="BOLD" />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MyText
          text={viewAllText}
          fontsize={16}
          fontFamily="REGULAR"
          style={{ marginRight: 5 }}
          color={Colors.red}
        />
        <AntDesign name="right" color={"red"} />
      </TouchableOpacity>
    </View>
  );
};

export default ViewAllTitle;
