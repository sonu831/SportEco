import React from "react";
import { View, Text, Image } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Property1Enabled from "./Property1Enabled";
import { styles } from "./styles";
import group910 from "../../../assets/images/group-910.png";
import group906 from "../../../assets/images/group-906.png";
import { CenteredLineWithText, TitleText } from "../../../components";
import ImagePicker from "../../../components/ImagePicker";

export const ProfileImage = ({
  image,
  uploadImage,
  handleImageUpload = () => {},
}) => (
  <View style={[styles.fieldColumn, styles.py16]}>
    <TitleText
      text={`Choose Your Avatar!`}
      subtext="Upload your photo for a better app experience"
    />
    <View style={styles.profileAvatarContainer}>
      <Image
        style={styles.chooseAnAvatar}
        resizeMode="center"
        source={group906}
      />
      <Text style={[styles.avatarImgText]}>Nitik Jain</Text>
    </View>
    <View style={styles.listedAvatarContainer}>
      <Text style={styles.chooseAnAvatarText}>Choose an avatar</Text>
      <Image
        style={styles.chooseAvatarChild}
        resizeMode="cover"
        source={group910}
      />
    </View>
    <CenteredLineWithText lineText="or" />
    <ImagePicker
      currentImage={null}
      isChooseAvatar
      handleImage={handleImageUpload}
    />
  </View>
);
