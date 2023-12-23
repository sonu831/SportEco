import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import MyText from "../../../components/MyText";

// constants
import { Colors } from "../../../constants/Colors";
// style
import { VenueCardProps } from "../../../screens/Venue/types";
import { styles } from "./styles";

const VenueCard = ({
  onPress = () => {},
  venueKey,
  details,
  onDeleteVenue,
}: VenueCardProps) => {
  const {
    image,
    venueName,
    venueLocation,
    sport,
    _id,
    distance,
    description,
    state,
    city,
    courtName,
  } = details;

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
      {image.length ? (
        <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
      ) : (
        <Image source={require("../../../assets/images/Venue1.png")} style={{ width: 80, height: 80 }} />
      )}

      <View style={styles.cardDetailsContainer}>
        <View style={styles.venueName}>
          <MyText
            text={venueName}
            color={Colors.darkGray}
            fontFamily="MEDIUM"
          />
          <MyText text={venueLocation} fontsize={10} color={Colors.gray} />
        </View>
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
            text={`${sport} - ${courtName}`}
            fontsize={14}
            style={{width: '90%'}}
            color={Colors.darkGray}
          />
          <TouchableOpacity
            onPress={() => onDeleteVenue(_id)}
            style={{
              position: 'absolute',
              right: -16
            }}
          >
            <Image source={require("../../../assets/images/delete.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require("../../../assets/images/verified.png")} />
    </TouchableOpacity>
  );
};

export default VenueCard;
