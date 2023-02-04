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

const ProfileScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"Profile">) => {
  const { dataToShow, handleGoBack, showPlayerDetails, handlePlayerDeletion } =
    useProfilePage({
      navigation,
      route,
    });

  const userFields = UserDetailsFields(dataToShow);
  const userLocationFields = locations(dataToShow);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <Pressable style={styles.backButton} onPress={handleGoBack}>
            <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
          </Pressable>
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: `data:image/jpeg;base64,${dataToShow.imageURl}` }}
              style={styles.avatar}
            />
            <Text style={styles.username}>
              {`${dataToShow?.fName} ${dataToShow?.lName} ${
                dataToShow?.age ? `, ${dataToShow?.age}` : ""
              }`}
            </Text>
            <View style={styles.flexRow}>
              <Button
                label="Edit Profile"
                icon="chevron-right"
                onPress={() => navigation.navigate("EditProfile")}
              />
              {showPlayerDetails && (
                <Button
                  type="cancel"
                  label="Delete Profile"
                  icon="chevron-right"
                  iconColor={Colors.orange}
                  onPress={() => handlePlayerDeletion()}
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
