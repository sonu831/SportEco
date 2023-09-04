import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const UserTypes = ({
    name,
    isCheck = false,
    width = "30%",
    image,
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: width,
                height: 160,
                flexDirection: "row",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 0,
                margin: 10,
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: isCheck ? Colors.orange : Colors.black
            }}
        >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={image} style={{ width: 50, height: 50 }} />
                    {isCheck ? <Text>{"\u2B24"}</Text> : null}
                </View>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserTypes

const styles = StyleSheet.create({})