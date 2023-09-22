import {
  View,
  Text,
  TouchableOpacity,
  ColorValue,
  ViewComponent,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
interface headerProps {
  title: string;
  hasActionIcon?: boolean;
  backgroundColor: ColorValue;
  ActionIcon: ViewComponent;
  actionBtnPress: void;
}
const Header: React.FC<headerProps> = ({
  title,
  hasActionIcon,
  backgroundColor,
  isActionBtnDisabled,
  actionBtnPress = () => {},
  ActionIcon = <AntDesign name="delete" size={20} color={"#fff"} />,
}) => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View
      style={{
        paddingTop: 20,
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
          onPress={actionBtnPress}
          style={[
            {
              backgroundColor: "#000",
              padding: 8,
              borderRadius: 100,
            },
            isActionBtnDisabled && { backgroundColor: "#d3d3d3" },
          ]}
          disabled={isActionBtnDisabled}
        >
          {ActionIcon}
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

export default Header;
