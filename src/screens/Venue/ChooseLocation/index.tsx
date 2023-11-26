import React from "react";
import { View } from "react-native";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  enableLatestRenderer,
} from "react-native-maps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import SearchBox from "../../../components/SearchBox";
import MyText from "../../../components/MyText";
import MyButton from "../../../components/MyButton";
import useChooseLocation from "./useChooseLocation";
import { Colors } from "../../../constants/Colors";
import { styles } from "./styles";
import AddressComponent from "../AddressComponent";

const ChooseLocation = () => {
  const {
    currentRegion,
    markerCoordinates,
    address,
    handleConfirmLocation,
    handleOnDragEnd,
    onRegionChange,
    isRegionChange,
    handleOnDragStart,
  } = useChooseLocation();
  enableLatestRenderer();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        onRegionChange={onRegionChange}
        initialRegion={currentRegion}
        showsUserLocation
      >
        <Marker
          onDragStart={handleOnDragStart}
          coordinate={markerCoordinates}
          draggable
          title="Marker Title"
          description="Marker Description"
          icon={
            <MaterialIcons name="location-pin" size={20} color={Colors.red} />
          }
          onDragEnd={(e) => handleOnDragEnd(e.nativeEvent.coordinate)}
        />
      </MapView>

      <SearchBox style={styles.searchBox} on />

      <View style={styles.infoContainer}>
        <AddressComponent address={address} />

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
