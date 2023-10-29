import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import { styles } from "./styles";
import group9 from "../../assets/images/group904.png";
import AvatarImage from "../AvatarImage";

const CardItem = ({
  Title,
  subTitle,
  Icon,
  isImage = false,
  onPress = () => {},
  borderColor = Colors.gray3,
  titleColor = Colors.black1,
  rightIconColor = Colors.black1,
  padding = 10,
  imageSource,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { borderColor, padding }]}
    >
      <View style={styles.innerContainer}>
        {isImage && (
          <View style={styles.image}>
            <AvatarImage
              height={50}
              width={50}
              imageUrl={isImage ? imageSource : ""}
              placeholderImage={group9}
              resizeMode="cover"
              isEdit={false}
            />
          </View>
        )}
        {Icon}
        <View>
          <Text style={[styles.title, { color: titleColor }]}>{Title}</Text>
          {subTitle && (
            <Text style={[styles.subTitle, { color: titleColor }]}>
              {subTitle}
            </Text>
          )}
        </View>
      </View>
      <AntDesign name="right" color={rightIconColor} />
    </TouchableOpacity>
  );
};

export default CardItem;
