import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

type AvatarProps = {
  item?: string;
  height?: number;
  width?: number;
  imageUrl?: string;
  placeholderImage?: any; // This could be a local image which is typically required as an object in React Native
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  customStyle?: any;
  onClick?: (imageInfo: {
    item: number;
    imageUrl?: string;
    placeholderImage?: any;
  }) => void;
  isEdit?: boolean;
};

const AvatarImage = ({
  imageUrl,
  height = 100,
  width = 100,
  placeholderImage,
  resizeMode = "cover",
  customStyle,
  onClick,
  item,
  isEdit = false,
}: AvatarProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onClick) {
          onClick({ item, imageUrl, placeholderImage });
        }
      }}
      activeOpacity={0.7}
    >
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
    </TouchableOpacity>
  );
};

export default AvatarImage;
