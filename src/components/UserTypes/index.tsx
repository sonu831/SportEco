import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/Colors";
import { UserTypesProps } from "./config";
import { styles } from "./styles";
import MyText from "../MyText";

const UserTypes: React.FC<UserTypesProps> = ({
  name,
  isCheck = false,
  width = "30%",
  image,
  onPress = () => { },
  height = 150,
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-evenly' }}>
      <Image source={image} style={{ width: 60, height: 60 }} />
      <MyText text={name} fontFamily="SEMIBOLD" fontsize={16} color={isCheck ? Colors.darkslategray : Colors.gray} />
    </View>
    <Icon
      style={{ position: "absolute", top: 10, right: 10 }}
      name={isCheck ? "check-square" : "square"}
      size={20}
      color={isCheck ? Colors.green : Colors.black}
    />
  </TouchableOpacity>
);

export default UserTypes;
