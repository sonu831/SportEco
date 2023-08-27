import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import group910 from "../../../assets/images/group-910.png";
import group906 from "../../../assets/images/group-906.png";
import { CenteredLineWithText, TitleText } from "../../../components";
import ImagePicker from "../../../components/ImagePicker";

export const ProfileImage = ({ handleImageUpload }) => (
  <View style={styles.container}>
    <TitleText
      text="Choose Your Avatar!"
      subtext="Upload your photo for a better app experience"
    />
    <View style={styles.profileAvatarContainer}>
      <Image source={group906} style={styles.avatarImage} resizeMode="center" />
      <Text style={styles.avatarName}>Nitik Jain</Text>
    </View>
    <View style={styles.listedAvatarContainer}>
      <Text style={styles.chooseAnAvatarText}>Choose an avatar</Text>
      <Image
        source={group910}
        style={styles.avatarListImage}
        resizeMode="cover"
      />
    </View>
    <CenteredLineWithText lineText="or" />
    <ImagePicker isChooseAvatar handleImage={handleImageUpload} />
  </View>
);
