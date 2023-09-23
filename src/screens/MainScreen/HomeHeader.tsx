import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MyText from "../../components/MyText";
import { Colors } from "../../constants/Colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeHeader = ({
  accountPress = () => {},
  notificationPress = () => {},
}) => {
  return (
    <View
      style={{
        backgroundColor: "#F1592A",
        paddingTop: 20,
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="map-pin" size={24} color={"#fff"} />
          <MyText
            text="Bengaluru"
            fontFamily="REGULAR"
            color={Colors.white}
            fontsize={18}
            style={{ marginHorizontal: 10 }}
          />
          <AntDesign name="down" size={14} color={"#fff"} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={notificationPress}>
            <Feather name="bell" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity onPress={accountPress}>
            <EvilIcons name="user" size={40} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <AntDesign name="search1" size={24} />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            color: "#878584",
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
