import React, { Fragment, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
// components
import { TitleText, CenteredLineWithText } from "../../components";
import ImagePicker from "../ImagePicker";
import AvatarImage from "../AvatarImage";
import useProfileImage from "./useProfileImage";
// style
import { styles } from "./styles";

export const ProfileImage = ({
  image,
  uploadImage,
  updateState,
  fName,
  lName,
}: any) => {
  const {
    imageUrl,
    initialAvatar,
    avatarImage,
    handleAvatarClick,
    handleUploadImage,
  } = useProfileImage(); // var

  useEffect(() => {
    updateState &&
      updateState({
        key: "image",
        value: avatarImage,
      });
  }, [avatarImage]);
  // UI
  return (
    <Fragment>
      <ImageBackground
        source={require("../../assets/images/curve.png")}
        style={styles.curveImageBg}
        resizeMode="stretch"
      />
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
          <Text style={styles.avatarName}>{`${fName} ${lName}`}</Text>
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
