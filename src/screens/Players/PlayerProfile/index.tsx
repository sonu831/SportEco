import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MyHeader from "../../../components/MyHeader";
import MyText from "../../../components/MyText";
import CardItem from "../../../components/CardItem";
import MyButton from "../../../components/MyButton";
import AvatarImage from "../../../components/AvatarImage";
import group10 from "../../../assets/images/group904.png";
import groupAttendance from "../../../assets/images/groupAttendance.png";
import groupEvaluation from "../../../assets/images/groupEvaluation.png";
import usePlayerProfile from "./usePlayerProfile";
import { styles } from "./styles";

const PlayerProfile = ({ navigation, route }) => {
  const {
    firstName,
    lastName,
    profilePic,
    goToEditPlayerProfile,
    handleDeletePlayer,
  } = usePlayerProfile();

  return (
    <View style={styles.container}>
      <MyHeader title="Player Profile" backgroundColor="#FBF1D8" />
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <AvatarImage
            imageUrl={profilePic}
            placeholderImage={group10}
            resizeMode="cover"
            isEdit={true}
          />
        </View>
        <MyText text={`${firstName} ${lastName}`} center fontsize={20} />
        <TouchableOpacity onPress={goToEditPlayerProfile}>
          <Text style={styles.viewProfileText}>
            View Full Profile <AntDesign name="right" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <MyText text="View" fontsize={18} fontFamily="BOLD" />
        <View style={{ height: 8 }} />
        <CardItem
          Title="Attendance"
          subTitle="Player attendance history"
          isImage={true}
          imageSource={groupAttendance}
        />
        <CardItem
          Title="Evaluation"
          subTitle="Player performance progress"
          isImage={true}
          imageSource={groupEvaluation}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          title="Delete Player"
          width="90%"
          onPress={handleDeletePlayer}
          alignSelf="center"
          backgroundColor="#303030"
        />
      </View>
    </View>
  );
};

export default PlayerProfile;
