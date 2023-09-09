import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from '../../constants/Colors';

const CardItem = ({
    Title,
    Icon,
    onPress = () => { },
    borderColor = Colors.gray3,
    titleColor = Colors.black1,
    rightIconColor = Colors.black1,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 55,
                paddingHorizontal: 10,
                marginVertical: 5,
                borderRadius: 100 / 8,
                borderColor: borderColor
            }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 10 }}>
                {Icon}
                <Text style={{ color: titleColor }}>{Title}</Text>
            </View>
            <AntDesign name="right" color={rightIconColor} />
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({})