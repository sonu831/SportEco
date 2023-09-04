import React, { Fragment } from "react";
import { View, Text, ImageBackground } from "react-native";
// components
import { CenteredLineWithText, TitleText } from "../../../components";
import ImagePicker from "../../../components/ImagePicker";
import AvatarImage from "../../../components/AvatarImage";
import useProfileImage from "./useProfileImage";
// assets
import curveBackground from "../../../assets/images/curve.png"
// style
import { styles } from "./styles";

export const ProfileImage = ({ image, uploadImage }) => {
  const { imageUrl, initialAvatar, avatarImage, handleAvatarClick, handleUploadImage } = useProfileImage(); // var
  // UI
  return (
    <Fragment>
      <ImageBackground source={curveBackground} style={styles.curveImageBg} resizeMode="stretch" />
      <View style={styles.container}>
        <TitleText
          text="Choose Your Avatar!"
          subtext="Upload your photo for a better app experience"
        />
        <View style={styles.profileAvatarContainer}>
          <View style={styles.avatarImage}>
            <AvatarImage
              imageUrl={imageUrl}
              placeholderImage={avatarImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.avatarName}>Nitik Jain</Text>
        </View>
        <View style={styles.listedAvatarContainer}>
          <Text style={styles.chooseAnAvatarText}>Choose an avatar</Text>
          <View style={styles.avatarListImage}>
            {Object.entries(initialAvatar).map(([key, image]) => (
              <AvatarImage
                key={key}
                item={key}
                placeholderImage={image}
                resizeMode="cover"
                height={80}
                width={80}
                onClick={handleAvatarClick}
                customStyle={{
                  borderWidth: image ? 0 : 1, // set the border width
                  borderColor: "black", // set the border color to black
                }}
              />
            ))}
          </View>
        </View>
        <CenteredLineWithText lineText="or" />
        <ImagePicker isChooseAvatar handleImage={handleUploadImage} />
      </View>
    </Fragment>
  );
};