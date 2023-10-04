import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
// component
import Header from '../../../components/MyHeader'
import MyText from '../../../components/MyText'
import SearchBox from '../../../components/SearchBox'
import FAB from '../../../components/FAB'
// constants
import { Colors } from '../../../constants/Colors'
// style
import { styles } from './VenuesStyle'

const Venues = ({ navigation }) => {
    const goToVenueDetails = () => navigation.navigate('VenueDetails')
    const goToCreateVenue = () => navigation.navigate('CreateVenue')
    const venuesData = [
        {
            id: 1,
            venue_name: "The Majestine Sports",
            venue_location: "HSR Layout • 2 Km",
            venue_type: "Badminton • Court 2",
            url: require("../../../assets/images/Venue1.png"),
        },
        {
            id: 2,
            venue_name: "Batches",
            venue_location: "Koramangala • 3 Km",
            venue_type: "Badminton • Court 2",
            url: require("../../../assets/images/Venue2.png"),
        },
        {
            id: 3,
            venue_name: "Program",
            venue_type: "Badminton • Court 2",
            url: require("../../../assets/images/Venue1.png"),
        },
    ];
    return (
        <View style={styles.container}>
            <Header title="Manage" />
            <View style={styles.mainView}>
                <MyText text="Venues." fontFamily="BOLD" fontsize={25} />
                <MyText text="List of all your Venues." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
                {
                    venuesData.length > 0 ? (
                        <View>
                            <SearchBox />
                            {
                                venuesData.map((item, index) => {
                                    return (
                                        <VenueCard
                                            onPress={goToVenueDetails}
                                            venueKey={index}
                                            venueName={item?.venue_name}
                                            venueType={item?.venue_type}
                                            venueLocation={item?.venue_location}
                                            venueImage={item?.url}
                                        />
                                    )
                                })
                            }
                        </View>
                    )
                        :
                        (<View
                            style={{
                                height: "75%",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image source={require("../../../assets/images/manage_3.png")} />
                            <MyText text={"No Venues Found"} fontSize={10} color={Colors.gray} />
                        </View>)
                }
            </View>
            <FAB onPress={() => goToCreateVenue()} />
        </View>
    )
}

export default Venues

const VenueCard = ({ onPress = () => { }, venueKey, venueName, venueLocation, venueType, venueImage }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderWidth: 0.5,
                padding: 12,
                borderRadius: 15,
                marginVertical: 10,
                borderColor: Colors.gray,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            activeOpacity={0.5}
            key={venueKey}
        >
            <Image
                source={venueImage}
                style={{ width: 80, height: 80 }}
            />
            <View>
                <MyText text={venueName} fontSize={10} color={Colors.darkGray} fontFamily="MEDIUM" />
                <MyText text={venueLocation} fontSize={10} color={Colors.gray} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Image
                        source={require('../../../assets/images/Icon_badminton.png')}
                        style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                    <MyText text={venueType} fontSize={10} color={Colors.darkGray} />
                </View>
            </View>
            <Image source={require('../../../assets/images/verified.png')} />
        </TouchableOpacity>
    )
}

