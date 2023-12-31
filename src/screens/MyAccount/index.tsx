import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import { RootStackScreenProps } from "../Navigation/types";
import Button from "../../components/Button";
import dummyUser from "../../assets/images/dummy-user.png";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
// assets
import curveBackground from "../../assets/images/editProfileBG.png";
import { CenteredLineWithText } from "../../components";
// style
import { styles } from "./styles";
import useMyAccount from "./useMyAccount";
import { colors } from "react-native-elements";
import CardItem from "../../components/CardItem";
import { useSelector } from "react-redux";
import { userDetails$ } from "../../store/users/selectors";
import AvatarImage from "../../components/AvatarImage";

const MyAccount = ({
  navigation,
  route,
}: RootStackScreenProps<"MyAccount">) => {
  const { handleGoBack, state, handleLogout } = useMyAccount({
    navigation,
    route,
  }); // var
  const userDetails: Partial<User> = useSelector(userDetails$); // var
  const { first_name, last_name, profile_pic } = userDetails; // var
  const base64Image = profile_pic?.filedata
    ? "data:image/png;base64," + profile_pic?.filedata
    : null;

  const arr = [
    {
      id: 0,
      name: "Coach",
    },
    {
      id: 1,
      name: "Player",
    },
    {
      id: 2,
      name: "Parent",
    },
  ]; // var arr
  const [selectedTab, setSelectedTab] = useState(arr[0]); // useState
  return (
    <SafeArea classNames={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <Header title={"My Account"} onBackPress={handleGoBack} isMyAccount />
          <ImageBackground
            source={curveBackground}
            style={styles.curveImageBg}
            resizeMode="stretch"
          />
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={{
                borderRadius: 100,
                borderColor: Colors.black2,
                borderWidth: 3,
              }}
            >
              <AvatarImage
                imageUrl={base64Image}
                placeholderImage={state.avatarImage}
                resizeMode="cover"
              />
              {/* <Image source={{ uri: base64Image }} style={styles.avatar} /> */}
            </TouchableOpacity>
            <Text
              style={[styles.username, { fontSize: 16, fontWeight: "300" }]}
            >
              {first_name + " " + last_name}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={[
                  styles.username,
                  { textDecorationLine: "underline", marginTop: 0 },
                ]}
              >
                View Full Profile
              </Text>
              <AntDesign name="right" style={{ marginTop: 3 }} />
            </TouchableOpacity>
            <View style={{ height: 10 }} />
          </View>
          <View style={{ padding: 10 }}>
            <CenteredLineWithText lineText="Switch Profile" />
            <View style={styles.toogleSwitchView}>
              <View style={styles.toogleSwitch}>
                {arr.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    // onPress={() => setSelectedTab(item)}
                    onPress={() => setSelectedTab(item)}
                    style={{
                      width: "33%",
                      height: 45,
                      backgroundColor:
                        selectedTab.id == item.id
                          ? Colors.orange
                          : Colors.white,
                      borderRadius: 100 / 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 18,
                        color:
                          selectedTab.id == item.id
                            ? Colors.white
                            : Colors.gray,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={{ height: 10 }} />
            <CardItem
              Title={"Notification Settings"}
              onPress={() => null}
              padding={18}
            />
            <CardItem Title={"Help"} onPress={() => null} padding={18} />
            <CardItem Title={"About Us"} onPress={() => null} padding={18} />
            <CardItem Title={"Policies"} onPress={() => null} padding={18} />
            <CardItem
              Title={"Log Out"}
              onPress={handleLogout}
              borderColor={Colors.red}
              titleColor={Colors.red}
              rightIconColor={Colors.red}
              padding={18}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default MyAccount;
