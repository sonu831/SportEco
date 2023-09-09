import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import venueIcon from "../../assets/images/venues.png";
import Button from "../../components/Button";
import ConfirmationModal from "../../components/ConfirmationModal";
import SafeArea from "../../components/SafeArea";
import { Colors } from "../../constants/Colors";
import { venueDetails, venueLocationDetails } from "../../constants/venue";
import { RootStackScreenProps } from "../Navigation/types";
import { styles } from "./styles";
import useVenueDetail from "./useVenueDetail";

const VenueDetail = ({ navigation }: RootStackScreenProps<"VenueDetail">) => {
  const { venueDetail, handleGoBack, handleDelete, state, updateState } =
    useVenueDetail({
      navigation,
    });

  const { showConfirmation } = state;

  const venueFields = venueDetails(venueDetail);
  const venueLocationFields = venueLocationDetails(venueDetail);

  return (
    <SafeArea classNames={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <Image source={venueIcon} style={styles.avatar} />
            <View style={styles.flexRow}>
              <Button
                label="Edit Venue"
                icon="chevron-right"
                onPress={() =>
                  navigation.navigate("AddVenue", { isEdit: true })
                }
              />
              <Button
                type="cancel"
                label="Delete Venue"
                icon="chevron-right"
                iconColor={Colors.orange}
                onPress={() =>
                  updateState({
                    key: "showConfirmation",
                    value: !showConfirmation,
                  })
                }
                // onPress={handleDelete}
                style={styles.ml10}
              />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.containerView}>
          {venueFields.map((detail, detailIndex) => (
            <View style={[styles.listItem]} key={detailIndex}>
              <View style={styles.listItemImage}>
                <Image source={detail.icon} />
                <Text style={styles.listItemText}>{detail.title}</Text>
              </View>
              <Text numberOfLines={1} style={styles.listItemTextValue}>
                {detail.value}
              </Text>
            </View>
          ))}
        </View>
        <View style={[styles.divider, styles.dividerHeading]}>
          <Text>Location</Text>
        </View>
        <View style={styles.containerView}>
          {venueLocationFields.map((location, locationIndex) => (
            <View style={styles.listItem} key={locationIndex}>
              <View style={styles.listItemLocationImage}>
                <Image source={location.icon} />
              </View>
              <Text>{location.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <ConfirmationModal
        open={showConfirmation}
        onHide={() =>
          updateState({
            key: "showConfirmation",
            value: !showConfirmation,
          })
        }
      >
        <View>
          <Text>Are you sure want to delete?</Text>
          <View style={styles.flexRow}>
            <Button
              label="Cancel"
              type="cancel"
              onPress={() =>
                updateState({
                  key: "showConfirmation",
                  value: !showConfirmation,
                })
              }
            />
            <Button label="Delete" onPress={handleDelete} style={styles.ml10} />
          </View>
        </View>
      </ConfirmationModal>
    </SafeArea>
  );
};

export default VenueDetail;
