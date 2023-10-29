import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import { styles } from "./styles";
import group9 from "../../assets/images/group904.png";

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
  const renderImage = () => {
    if (isImage) {
      // Check if imageSource is a string (could be base64 or a URI)
      if (typeof imageSource === "string") {
        return <Image style={styles.image} source={{ uri: imageSource }} />;
      }
      // If imageSource is not a string, fallback to the default image
      return <Image style={styles.image} source={group9} />;
    }
    return null;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { borderColor, padding }]}
    >
      <View style={styles.innerContainer}>
        {renderImage()}
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
