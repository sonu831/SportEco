import React from "react";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MyText from "../../../components/MyText";
import { styles } from "./styles";
import { Address } from "../types";

type AddressProps = {
  address: Address;
};

const AddressComponent = ({ address }: AddressProps) => {
  return (
    <View style={styles.locationRow}>
      <MaterialIcons name="location-pin" size={35} style={styles.iconStyle} />
      <View>
        <MyText
          text={`${address.name || ""}, ${address.streetNumber || ""}, ${
            address.street || ""
          }`}
          fontFamily="BOLD"
        />
        <MyText
          text={`${address.subregion || ""}, ${address.region || ""}, ${
            address.city || ""
          }`}
        />
      </View>
    </View>
  );
};

export default AddressComponent;
