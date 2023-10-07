import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MyText from '../MyText';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from '../../constants/Colors';

const BatchCard = ({
    bacthItem,
    bacthIndex,
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity
            key={bacthIndex}
            onPress={onPress}
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderWidth: 0.5,
                borderRadius: 15,
                marginVertical: 10,
                backgroundColor: "#fff",
                padding: 12,
                borderColor: Colors.gray
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={{ backgroundColor: Colors.gray3, padding: 8, borderRadius: 6 }}>
                    <Image source={require('../../assets/images/Icon_badminton.png')} style={{ width: 30, height: 30 }} />
                </View>
                <View style={{ marginLeft: 12 }}>
                    <MyText text={bacthItem?.batch_name} fontFamily="SEMIBOLD" />
                    <MyText text={bacthItem?.players.length} fontFamily="REGULAR" color={Colors.gray2} />
                </View>
            </View>
            <AntDesign name="right" style={{ marginRight: 5 }} />
        </TouchableOpacity>
    );
}

export default BatchCard

const styles = StyleSheet.create({})