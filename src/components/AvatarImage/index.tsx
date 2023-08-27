import React from "react";
import { View, Image } from "react-native";
import group906 from "../../../assets/images/group-906.png";
import styles from "./styles";

type AvatarProps = {
  height?: number;
  width?: number;
  imageUrl?: string;
  placeholderImage?: any; // This could be a local image which is typically required as an object in React Native
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  customStyle?: any;
};

const AvatarImage = ({
  imageUrl,
  height = 100,
  width = 100,
  placeholderImage,
  resizeMode = "cover",
  customStyle,
}: AvatarProps) => {
  return (
    <View
      style={[styles.avatarContainer, { height, width }, { ...customStyle }]}
    >
      {imageUrl || placeholderImage ? (
        <Image
          source={imageUrl ? { uri: imageUrl } : placeholderImage}
          style={styles.avatarImage}
          resizeMode={resizeMode}
        />
      ) : null}
    </View>
  );
};

export default AvatarImage;
