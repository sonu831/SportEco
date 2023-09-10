import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/Colors";
import { UserTypesProps } from "./config";
import { styles } from "./styles";

const UserTypes: React.FC<UserTypesProps> = ({
  name,
  isCheck = false,
  width = "30%",
  image,
  onPress = () => {},
  height = 160,
  isEdit = true,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.card,
      {
        width,
        borderColor: isCheck ? Colors.orange : Colors.black,
        height,
      },
    ]}
    disabled={!isEdit}
  >
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={image} style={{ width: 50, height: 50 }} />
      <Text>{name}</Text>
    </View>
    <Icon
      style={{ position: "absolute", top: 10, right: 10 }}
      name={isCheck ? "check-square" : "square"}
      size={20}
      color={isCheck ? Colors.orange : Colors.black}
    />
  </TouchableOpacity>
);

export default UserTypes;
