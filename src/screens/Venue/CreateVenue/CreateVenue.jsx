import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/MyHeader'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from "react-native-paper";
import MyButton from '../../../components/MyButton'
import { styles } from './CreateVenueStyle'
import { Colors } from '../../../constants/Colors';

const CreateVenue = () => {
    const [venueName, setVenueName] = useState('')
    const [sport, setSport] = useState('')
    const [courtName, setCourtName] = useState('')
    const [venueDescription, setVenueDescription] = useState('')

    return (
        <View style={styles.container}>
            <Header title="Create Venue" />
            <TouchableOpacity onPress={() => { }}>
                {/* <Image source={require("../../../assets/images/Image.png")} /> */}
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        zIndex: 100,
                    }}
                >
                    <AntDesign name="delete" color={"#fff"} size={26} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        zIndex: 100,
                    }}
                >
                    <AntDesign name="pluscircleo" color={"#fff"} size={26} />
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.mainView}>
                <TextInput
                    mode="outlined"
                    label="Venue Name"
                    placeholder="Enter Venue Name"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={venueName}
                    onChangeText={(text) => setVenueName(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2,
                        marginBottom: 10
                    }}
                />
                <TextInput
                    mode="outlined"
                    label="Sport"
                    placeholder="Enter Sport"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={sport}
                    onChangeText={(text) => setSport(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2,
                        marginBottom: 10
                    }}
                />
                <TextInput
                    mode="outlined"
                    label="Court Name"
                    placeholder="Enter Court Name"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={courtName}
                    onChangeText={(text) => setCourtName(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2,
                        marginBottom: 10
                    }}
                />
                <TextInput
                    mode="outlined"
                    label="Venue Description (Optional)"
                    placeholder="Enter Venue Description"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={venueDescription}
                    multiline
                    onChangeText={(text) => setVenueDescription(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2,
                        marginBottom: 10
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    padding: 20,
                    justifyContent: "flex-end",
                }}
            >
                <MyButton
                    width={"100%"}
                    alignSelf="center"
                    title="Select Location"
                    leftIcon={
                        <Feather
                            name="map"
                            size={20}
                            color={"#FFF"}
                            style={{ marginRight: 10 }}
                        />
                    }
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default CreateVenue