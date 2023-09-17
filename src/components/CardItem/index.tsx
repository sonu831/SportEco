import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from '../../constants/Colors';

const CardItem = ({
    Title,
    Icon,
    isImage,
    onPress = () => { },
    borderColor = Colors.gray3,
    titleColor = Colors.black1,
    rightIconColor = Colors.black1,
    padding = 10,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: padding,
                marginVertical: 8,
                borderRadius: 100 / 6,
                borderColor: borderColor,
            }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {isImage && <Image
                    source={require('../../assets/images/group904.png')}
                    style={{ height: 50, width: 50 }}
                />}
                {Icon}
                <Text style={{ color: titleColor, marginLeft: 10 }}>{Title}</Text>
            </View>
            <AntDesign name="right" color={rightIconColor} />
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({})