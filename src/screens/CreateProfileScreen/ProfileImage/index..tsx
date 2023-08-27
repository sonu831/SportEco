import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import group910 from "../../../assets/images/group-910.png";
import group906 from "../../../assets/images/group-906.png";
import { CenteredLineWithText, TitleText } from "../../../components";
import ImagePicker from "../../../components/ImagePicker";
import AvatarImage from "../../../components/AvatarImage";
import useProfileImage from "./useProfileImage";

export const ProfileImage = ({ image, uploadImage }) => {
  const { initialAvatar, avatarImage, handleAvatarClick, handleUploadImage } =
    useProfileImage();
  return (
    <View style={styles.container}>
      <TitleText
        text="Choose Your Avatar!"
        subtext="Upload your photo for a better app experience"
      />
      <View style={styles.profileAvatarContainer}>
        <View style={styles.avatarImage}>
          <AvatarImage placeholderImage={group906} resizeMode="center" />
        </View>
        {/* <Image source={group906} style={styles.avatarImage} resizeMode="center" /> */}
        <Text style={styles.avatarName}>Nitik Jain</Text>
      </View>
      <View style={styles.listedAvatarContainer}>
        <Text style={styles.chooseAnAvatarText}>Choose an avatar</Text>
        <View style={styles.avatarListImage}>
          {Object.entries(initialAvatar).map(([key, image]) => (
            <AvatarImage
              key={key}
              placeholderImage={image}
              resizeMode="cover"
              height={80}
              width={80}
              customStyle={{
                borderWidth: image ? 0 : 1, // set the border width
                borderColor: "black", // set the border color to black
              }}
            />
          ))}
        </View>
        {/* <Image
        source={group910}
        style={styles.avatarListImage}
        resizeMode="cover"
      /> */}
      </View>
      <CenteredLineWithText lineText="or" />
      <ImagePicker isChooseAvatar handleImage={handleUploadImage} />
    </View>
  );
};
