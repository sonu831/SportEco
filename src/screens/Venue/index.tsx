import { Image, View } from "react-native";
import React from "react";
// component
import Header from "../../components/MyHeader";
import MyText from "../../components/MyText";
import SearchBox from "../../components/SearchBox";
import FAB from "../../components/FAB";
// constants
import { Colors } from "../../constants/Colors";
// style
import { styles } from "./styles";
import useVenue from "./useVenue";
import VenueCard from "../../components/Venue/VenueCard";
import manage3 from "../../assets/images/manage_3.png";

const Venues = () => {
  const {
    venueList,
    handleGoBack,
    goToCreateVenue,
    goToVenueDetails,
    venueDeStructure,
    onDeleteVenue,
  } = useVenue();
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <MyText text="Venues." fontFamily="BOLD" fontsize={25} />
        <MyText
          text="List of all your Venues."
          fontFamily="SEMIBOLD"
          fontsize={14}
          color={Colors.gray}
        />
        {venueList.length > 0 ? (
          <View>
            <SearchBox />
            {venueList.map((item, index) => {
              const venueDetails= venueDeStructure(item);
              return (
                <VenueCard
                  onPress={goToVenueDetails}
                  details={venueDeStructure(venueDetails)}
                  onDeleteVenue={onDeleteVenue}
                />
              );
            })}
          </View>
        ) : (
          <View
            style={{
              height: "75%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={manage3} />
            <MyText
              text={"No Venues Found"}
              fontSize={10}
              color={Colors.gray}
            />
          </View>
        )}
      </View>
      <FAB onPress={() => goToCreateVenue()} />
    </View>
  );
};

export default Venues;
