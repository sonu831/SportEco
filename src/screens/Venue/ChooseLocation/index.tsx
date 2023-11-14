import { View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../../constants/Colors";
import SearchBox from "../../../components/SearchBox";
import MyText from "../../../components/MyText";
import MyButton from "../../../components/MyButton";

const ChooseLocation = () => {
  const markerCoordinates = {
    latitude: 37.78825, // Latitude of the marker
    longitude: -122.4324, // Longitude of the marker
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825, // Initial latitude coordinate
          longitude: -122.4324, // Initial longitude coordinate
          latitudeDelta: 0.0922, // Delta, controls the zoom level
          longitudeDelta: 0.0421, // Delta, controls the zoom level
        }}
      >
        <Marker
          coordinate={markerCoordinates}
          title="Marker Title"
          description="Marker Description"
          icon={
            <MaterialIcons name="location-pin" size={20} color={Colors.red} />
          }
        />
      </MapView>
      <SearchBox
        style={{
          marginHorizontal: 20,
          position: "absolute",
          top: 10,
          right: 10,
          left: 10,
          zIndex: 100,
          backgroundColor: "white",
        }}
      />
      <View
        style={{
          height: 150,
          backgroundColor: Colors.white,
          padding: 10,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", width: "85%" }}>
          <MaterialIcons
            name="location-pin"
            size={35}
            color={Colors.red}
            style={{ paddingHorizontal: 5 }}
          />
          <View>
            <MyText text="The Majestine Sports" fontFamily="BOLD" />
            <MyText text="HSR Layout" />
          </View>
        </View>
        <MyButton title="Confirm Location" width={"80%"} />
      </View>
    </View>
  );
};

export default ChooseLocation;
