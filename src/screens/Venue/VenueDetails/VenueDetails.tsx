import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octions from "@expo/vector-icons/Octicons";
import MyButton from "../../../components/MyButton";
import { RootStackScreenProps } from "../../Navigation/types";

const VenueDetails = ({
  navigation,
  route,
}: RootStackScreenProps<"VenueDetails">) => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);

  const handlePageChange = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offset / Dimensions.get("window").width);
    setCurrentPage(page);
  };

  const carouselData = [
    { text: "Item 1", image: require("../../../assets/images/loginImage.png") },
    { text: "Item 2", image: require("../../../assets/images/loginImage.png") },
    { text: "Item 3", image: require("../../../assets/images/loginImage.png") },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 100,
            backgroundColor: Colors.gray2,
            borderRadius: 100 / 2,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <Octions name="arrow-left" color={"#fff"} size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 100,
            backgroundColor: Colors.gray2,
            borderRadius: 100 / 2,
            paddingVertical: 8,
            paddingHorizontal: 8,
            alignContent: "center",
          }}
        >
          <Feather name="edit" color={"#fff"} size={22} />
        </TouchableOpacity>
        <View style={styles.paginationContainer}>
          {carouselData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentPage && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={handlePageChange}
        style={{ height: 80 }}
      />
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyText
              text="The Majestine Sports"
              fontFamily="MEDIUM"
              fontsize={18}
            />
            <Image
              source={require("../../../assets/images/verified.png")}
              style={{ marginLeft: 5 }}
            />
          </View>
          <TouchableOpacity>
            <Feather
              name="share-2"
              style={{ color: Colors.darkGray }}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <MyText text="HSR Layout • 2 Km" fontFamily="MEDIUM" fontsize={14} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Image
            source={require("../../../assets/images/Icon_badminton.png")}
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
          <MyText
            text={"Badminton • Court 2"}
            fontSize={8}
            color={Colors.darkGray}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Ionicons name="time-outline" size={20} style={{ marginRight: 5 }} />
          <MyText
            text={"Open • 5 AM - 11 PM"}
            fontSize={8}
            color={Colors.darkGray}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Ionicons
            name="location-outline"
            size={20}
            style={{ marginRight: 5 }}
          />
          <MyText
            text={"383/1-10, 5th Cross, Bandepalya"}
            fontSize={8}
            color={Colors.darkGray}
          />
        </View>
        <MyText text="About Venue" fontFamily="MEDIUM" fontsize={18} />
        <MyText
          text="The Majestine Sports is a badminton high performance center with many national athletes training at the center, kindly follow the footwear rules. Players need to carry their non marking badminton shoes in the premise. Players walking into the center wearing the shoes will not be allowed to pay with it."
          fontFamily="MEDIUM"
          fontsize={13}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <MyButton
          width={"90%"}
          alignSelf="center"
          title="Open in Maps"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default VenueDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    width: Dimensions.get("window").width,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: Colors.gray,
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: Colors.white,
  },
  mainView: {
    padding: 20,
  },
});
