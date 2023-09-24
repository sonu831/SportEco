import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MyHeader from "../../components/MyHeader";
import MyText from "../../components/MyText";
import CardItem from "../../components/CardItem";
import MyButton from "../../components/MyButton";
import { Colors } from "../../constants/Colors";
import usePlayers from "./usePlayers";

const PlayerProfile = ({ navigation, route }) => {
  const { playerProfileResponse, handleDeletePlayer } = usePlayers({
    navigation,
    route,
  });

  const { first_name = "", last_name = "" } = playerProfileResponse || {};

  const goToEditPlayerProfile = () => {
    navigation.navigate("EditPlayerProfile");
  };

  return (
    <View style={styles.container}>
      <MyHeader title="Player Profile" backgroundColor="#FBF1D8" />
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/group904.png")}
          style={styles.profileImage}
        />
        <MyText text={`${first_name} ${last_name}`} center fontsize={20} />
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
          imageSource={require("../../assets/images/groupAttendance.png")}
        />
        <CardItem
          Title="Evaluation"
          subTitle="Player performance progress"
          isImage={true}
          imageSource={require("../../assets/images/groupEvaluation.png")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    backgroundColor: "#FBF1D8",
    padding: 20,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  profileImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: Colors.darkslategray,
    borderRadius: 100,
  },
  viewProfileText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  mainView: {
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default PlayerProfile;
