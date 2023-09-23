import React from "react";
import { View } from "react-native";
import MyText from "../../components/MyText";
import { Colors } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const TaskCard = ({ Icon, title, subText }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: "grey",
          }}
        >
          {Icon}
        </View>
        <View style={{ marginLeft: 20 }}>
          <MyText text={title} fontFamily="MEDIUM" />
          <MyText
            text={subText}
            fontFamily="REGULAR"
            color={Colors.gray}
            fontsize={12}
          />
        </View>
      </View>

      <AntDesign name="right" style={{ marginRight: 5 }} />
    </View>
  );
};

export default TaskCard;
