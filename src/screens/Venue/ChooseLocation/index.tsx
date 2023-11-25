import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import SearchBox from "../../../components/SearchBox";
import MyText from "../../../components/MyText";
import MyButton from "../../../components/MyButton";
import useChooseLocation from "./useChooseLocation";
import { Colors } from "../../../constants/Colors";
import { styles } from "./styles";

const ChooseLocation = () => {
  const { markerCoordinates, address, handleConfirmLocation } =
    useChooseLocation();

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={markerCoordinates}>
        <Marker
          coordinate={markerCoordinates}
          title="Marker Title"
          description="Marker Description"
          icon={
            <MaterialIcons name="location-pin" size={20} color={Colors.red} />
          }
        />
      </MapView>

      <SearchBox style={styles.searchBox} />

      <View style={styles.infoContainer}>
        <View style={styles.locationRow}>
          <MaterialIcons
            name="location-pin"
            size={35}
            color={Colors.red}
            style={styles.iconStyle}
          />
          <View>
            <MyText
              text={`${address.name}, ${address.streetNumber}, ${address.street}`}
              fontFamily="BOLD"
            />
            <MyText
              text={`${address.subregion}, ${address.region}, ${address.city}`}
            />
          </View>
        </View>

        <MyButton
          title="Confirm Location"
          onPress={handleConfirmLocation}
          width="80%"
        />
      </View>
    </View>
  );
};

export default ChooseLocation;
