import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import SearchBar from "../../components/SearchBar";
import { styles } from "./styles";
import noPlayer from "../../assets/images/no-player.png";
import addIcon from "../../assets/images/floating-icon-add.png";
import { RootStackScreenProps } from "../Navigation/types";
import useCommonScreen from "./useEventScreen";
import { Colors } from "../../constants/Colors";
import SafeArea from "../../components/SafeArea";

const Events = ({ navigation, route }: RootStackScreenProps<"Events">) => {
  const { handleGoBack, handleAddIcon } = useCommonScreen({
    navigation,
    route,
  });

  return (
    <SafeArea classNames={styles.safeArea}>
      <ScrollView style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.menuIconContainer}
          onPress={handleGoBack}
        >
          <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
        </TouchableOpacity>
        <View style={styles.mx40}>
          <SearchBar
            onChange={
              (searchString: string) =>
                console.log("searchString", searchString)
              // updateState({ key: "searchedText", value: searchString })
            }
          />
        </View>
        <View style={styles.noPlayerContainer}>
          <Image source={noPlayer} />
          <Text style={styles.noPlayerText}>No events displayed</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingBtn} onPress={handleAddIcon}>
        <Image source={addIcon} />
      </TouchableOpacity>
    </SafeArea>
  );
};

export default Events;
