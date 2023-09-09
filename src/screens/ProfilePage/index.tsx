import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { styles } from "./styles";
import { locations, UserDetailsFields } from "../../constants/Profile";
import useProfilePage from "./useProfilePage";
import { RootStackScreenProps } from "../Navigation/types";
import Button from "../../components/Button";
import dummyUser from "../../assets/images/dummy-user.png";
import SafeArea from "../../components/SafeArea";
import ConfirmationModal from "../../components/ConfirmationModal";

const ProfileScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"Profile">) => {
  const {
    dataToShow,
    handleGoBack,
    showPlayerDetails,
    handlePlayerDeletion,
    handleEditBtn,
    state,
    updateState,
  } = useProfilePage({
    navigation,
    route,
  });

  const { showConfirmation } = state;

  const userFields = UserDetailsFields(dataToShow);
  const userLocationFields = locations(dataToShow);

  return (
    <SafeArea classNames={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <Pressable style={styles.backButton} onPress={handleGoBack}>
            <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
          </Pressable>
          <View style={styles.headerContainer}>
            <Image source={dummyUser} style={styles.avatar} />
            <Text style={styles.username}>
              {`${dataToShow?.first_name} ${dataToShow?.last_name}`}
            </Text>
            <View style={styles.flexRow}>
              <Button
                label="Edit Profile"
                icon="chevron-right"
                onPress={handleEditBtn}
              />
              {showPlayerDetails && (
                <Button
                  type="cancel"
                  label="Delete Profile"
                  icon="chevron-right"
                  iconColor={Colors.orange}
                  onPress={() =>
                    updateState({
                      key: "showConfirmation",
                      value: !showConfirmation,
                    })
                  }
                  style={styles.ml10}
                />
              )}
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.containerView}>
          {userFields.map((detail, detailIndex) => (
            <View style={styles.listItem} key={detailIndex}>
              <View style={styles.listItemImage}>
                <Image source={detail.icon} />
              </View>
              <Text style={styles.listItemText}>{detail.title}</Text>
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
          {userLocationFields.map((location, locationIndex) => (
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
          <Text>Are you sure want to remove this player?</Text>
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
            <Button
              label="Delete"
              onPress={handlePlayerDeletion}
              style={styles.ml10}
            />
          </View>
        </View>
      </ConfirmationModal>
    </SafeArea>
  );
};

export default ProfileScreen;
