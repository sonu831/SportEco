// import React from "react";
// import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { styles } from "./styles";
// import useMainScreen from "./useMainScreen";
// import { Colors } from "../../constants/Colors";
// import SearchBar from "../../components/SearchBar";
// import moment from "moment";
// import { tabs, dummyEvent } from "../../constants/MainScreen";
// import { RootBottomTabProps } from "../Navigation/types";
// import SafeArea from "../../components/SafeArea";

// const MainScreen = ({ navigation }: RootBottomTabProps<"Main">) => {
//   const { updateState } = useMainScreen();

//   return (
//     <SafeArea classNames={styles.safeArea}>
//       <ScrollView style={styles.mainContainer}>
//         <TouchableOpacity style={styles.menuIconContainer}>
//           <MaterialIcons name="menu" size={30} color="black" />
//         </TouchableOpacity>
//         <SearchBar
//           onChange={(searchString: string) =>
//             updateState({ key: "searchedText", value: searchString })
//           }
//         />
//         <View style={styles.headingContainer}>
//           <Text style={styles.heading}>Upcoming Events</Text>
//           <TouchableOpacity
//             style={styles.viewMore}
//             onPress={() => navigation.navigate("MyAccount")}
//           >
//             <Text style={styles.viewMoreText}>My Account</Text>
//             <AntDesign name="eyeo" size={16} color={Colors.lightOrange1} />
//           </TouchableOpacity>
//         </View>

//         <ScrollView
//           horizontal={true}
//           contentContainerStyle={styles.scrollView}
//           showsHorizontalScrollIndicator={false}
//         >
//           {dummyEvent.map((event, eventIndex) => (
//             <View key={eventIndex} style={styles.eventContainer}>
//               <Text style={styles.eventHeading}>{event.title}</Text>
//               <Text style={styles.eventDateTime}>
//                 {moment(event.startTime).format("DD MMM, dddd")}
//               </Text>
//               <Text style={[styles.eventDateTime, styles.mt11]}>{`${moment(
//                 event.startTime
//               ).format("HH:MM A")} - ${moment(event.endTime).format(
//                 "HH:MM A"
//               )}`}</Text>
//             </View>
//           ))}
//         </ScrollView>
//         <View style={styles.navigator}>
//           {tabs.map((tab, tabIndex) => (
//             <TouchableOpacity
//               key={tabIndex}
//               style={[styles.navigatorItem, tabIndex % 2 === 0 && styles.mr42]}
//               onPress={() =>
//                 navigation.navigate("CommonScreen", {
//                   title: tab.title,
//                 })
//               }
//             >
//               <Image source={tab.icon} />
//               <Text style={styles.navigatorItemText}>{tab.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeArea>
//   );
// };

// export default MainScreen;

import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MyText from "../../components/MyText";
import { Colors } from "../../constants/Colors";

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
  const gotoService = (item) => { //Function: To handle Bathes Screens
    switch (item.name) {
      case "Players":
        return navigation.navigate("Players")
        break
      case "Batches":
        return navigation.navigate("Batches")
      case "Venues":
        break
      default:
        break;
    }
  }
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
            <MyText text={"Manage"} fontFamily="REGULAR" fontsize={16} style={{ marginHorizontal: 10 }} />
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
                  <MyText text={item.name} fontFamily="REGULAR" fontsize={14} center={true} style={{ marginTop: 5 }} />
                </TouchableOpacity>
              );
            })}
          </View>
          <MyText text={"My Tasks"} fontFamily="BOLD" fontsize={18} style={{ marginTop: 25 }} />
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
  )
}

export default MainScreen

const HomeHeader = ({
  accountPress = () => { },
  notificationPress = () => { },
}) => {
  return (
    <View
      style={{
        backgroundColor: "#F1592A",
        paddingTop: 20,
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="map-pin" size={24} color={"#fff"} />
          <MyText text="Bengaluru" fontFamily="REGULAR" color={Colors.white} fontsize={18} style={{ marginHorizontal: 10 }} />
          <AntDesign name="down" size={14} color={"#fff"} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={notificationPress}>
            <Feather name="bell" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity onPress={accountPress}>
            <EvilIcons name="user" size={40} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <AntDesign name="search1" size={24} />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 16,
            color: "#878584",
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ViewAllTitle = ({ title, viewAllText = "View all" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MyText text={title} fontsize={18} fontFamily="BOLD" />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MyText text={viewAllText} fontsize={16} fontFamily="REGULAR" style={{ marginRight: 5 }} color={Colors.red} />
        <AntDesign name="right" color={"red"} />
      </TouchableOpacity>
    </View>
  );
};

const TaskCard = ({ Icon, title, subText }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: "grey",
          }}
        >
          {Icon}
        </View>
        <View style={{ marginLeft: 20 }}>
          <MyText text={title} fontFamily="MEDIUM" />
          <MyText text={subText} fontFamily="REGULAR" color={Colors.gray} fontsize={12} />
        </View>
      </View>

      <AntDesign name="right" style={{ marginRight: 5 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    padding: 20,
  },
})
