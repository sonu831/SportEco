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
import WarningModal from "../../../components/WarningModal";

const PlayerProfile = ({ navigation, route }) => {
  const {
    firstName,
    lastName,
    profilePic,
    goToEditPlayerProfile,
    handleDeletePlayer,
    setShowModal,
    showModal,
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
          onPress={() => setShowModal(true)}
          alignSelf="center"
          backgroundColor="#303030"
          leftIcon={
            <AntDesign name="delete" size={20} color={"#fff"} style={{ marginRight: 10 }} />
          }
        />
      </View>
      <WarningModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onDelete={handleDeletePlayer}
        message={
          <View style={{ flexDirection: 'row', paddingHorizontal: 14 }}>
            <Text style={{ fontSize: 18 }}>
              Are you sure that you want to delete this player:{' '}
              <Text style={{ fontWeight: 'bold' }}>{firstName} {lastName}</Text>?
            </Text>
          </View>}
      />
    </View>
  );
};

export default PlayerProfile;
