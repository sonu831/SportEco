import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import MyText from "../../../components/MyText";

// constants
import { Colors } from "../../../constants/Colors";
// style
import { styles } from "./styles";

const VenueCard = ({
  onPress = () => {},
  venueKey,
  venueName,
  venueLocation,
  venueType,
  venueImage,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 0.5,
        padding: 12,
        borderRadius: 15,
        marginVertical: 10,
        borderColor: Colors.gray,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      activeOpacity={0.5}
      key={venueKey}
    >
      <Image source={venueImage} style={{ width: 80, height: 80 }} />
      <View>
        <MyText
          text={venueName}
          fontSize={10}
          color={Colors.darkGray}
          fontFamily="MEDIUM"
        />
        <MyText text={venueLocation} fontSize={10} color={Colors.gray} />
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
          <MyText text={venueType} fontSize={10} color={Colors.darkGray} />
        </View>
      </View>
      <Image source={require("../../../assets/images/verified.png")} />
    </TouchableOpacity>
  );
};

export default VenueCard;
