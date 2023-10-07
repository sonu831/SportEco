import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import MyText from "../../components/MyText";
import TaskCard from "./TaskCard";
import HomeHeader from "./HomeHeader";
import ViewAllTitle from "./ViewAllTitle";

const MainScreen = ({ navigation }) => {
  const gotoNotification = () => navigation.navigate("Notification");
  const gotoMyAccount = () => navigation.navigate("MyAccount");
  const data = [
    {
      id: 1,
      name: "Players",
      url: require("../../assets/images/manage_1.png"),
    },
    {
      id: 2,
      name: "Batches",
      url: require("../../assets/images/manage_2.png"),
    },
    { id: 3, name: "Venues", url: require("../../assets/images/manage_3.png") },
    {
      id: 4,
      name: "Program",
      url: require("../../assets/images/manage_4.png"),
    },
  ];
  const carouselData = [1, 2, 3, 4, 5];
  const gotoService = (item) => {
    //Function: To handle Bathes Screens
    switch (item.name) {
      case "Players":
        return navigation.navigate("Players");
      case "Batches":
        return navigation.navigate("Batches");
      case "Venues":
        return navigation.navigate("Venues");
      case "Program":
        return navigation.navigate("Programs");
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <HomeHeader
        notificationPress={gotoNotification}
        accountPress={gotoMyAccount}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <ViewAllTitle title={"Upcoming Events"} />
        </View>
        <FlatList
          horizontal
          pagingEnabled
          nestedScrollEnabled
          data={carouselData}
          style={{}}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 150,
                  width: Dimensions.get("screen").width - 40,
                  marginHorizontal: 10,
                  borderRadius: 15,
                }}
              >
                {[1, 2, 3, 4].map((e, i) => {
                  return (
                    <Image
                      key={i.toString()}
                      source={{
                        uri: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
                      }}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        borderRadius: 15,
                      }}
                    />
                  );
                })}

                <View
                  style={{
                    padding: 20,
                  }}
                >
                  <MyText
                    text="Basketball League Finals"
                    fontFamily="BOLD"
                    fontsize={16}
                    color={"#fff"}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 5,
                    }}
                  >
                    <Feather name="clock" color={"#fff"} />
                    <MyText text=" 10:30 AM" fontsize={12} color={"#fff"} />
                    <View style={{ width: "5%" }} />
                    <Feather name="calendar" color={"#fff"} />
                    <MyText text=" 12th August" fontsize={12} color={"#fff"} />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Feather name="map-pin" color={"#fff"} />
                    <MyText text=" Koramangala" fontsize={12} color={"#fff"} />
                  </View>
                  <Feather
                    name="arrow-right-circle"
                    size={30}
                    style={{
                      alignSelf: "flex-end",
                    }}
                    color={"#fff"}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                    }}
                  >
                    <Octicons
                      name="dot"
                      color={"#fff"}
                      size={14}
                      style={{ marginHorizontal: 2 }}
                    />
                    <Octicons
                      name="dot"
                      color={"#fff"}
                      size={14}
                      style={{ marginHorizontal: 2 }}
                    />
                    <Octicons
                      name="dot-fill"
                      color={"#fff"}
                      size={14}
                      style={{ marginHorizontal: 2 }}
                    />
                    <Octicons
                      name="dot"
                      color={"#fff"}
                      size={14}
                      style={{ marginHorizontal: 2 }}
                    />
                    <Octicons
                      name="dot"
                      color={"#fff"}
                      size={14}
                      style={{ marginHorizontal: 2 }}
                    />
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.mainView}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ borderWidth: 0.2, width: "30%" }} />
            <MyText
              text={"Manage"}
              fontFamily="REGULAR"
              fontsize={16}
              style={{ marginHorizontal: 10 }}
            />
            <View style={{ borderWidth: 0.2, width: "30%" }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index.toString()}
                  onPress={() => gotoService(item)}
                  style={{ paddingHorizontal: 10 }}
                >
                  <Image source={item.url} style={{}} />
                  <MyText
                    text={item.name}
                    fontFamily="REGULAR"
                    fontsize={14}
                    center={true}
                    style={{ marginTop: 5 }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <MyText
            text={"My Tasks"}
            fontFamily="BOLD"
            fontsize={18}
            style={{ marginTop: 25 }}
          />
          <TaskCard
            title={"Attendance"}
            subText={"Record player attendance"}
            Icon={<Feather name="check" color={"#000"} size={24} />}
          />
          <TaskCard
            title={"Evaluation"}
            subText={"Record player progress"}
            Icon={<Feather name="trending-up" color={"#000"} size={24} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    padding: 20,
  },
});
