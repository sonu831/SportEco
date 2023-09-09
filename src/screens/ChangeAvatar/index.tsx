import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileImage } from '../../components/ProfileImage'
import { RootStackScreenProps } from '../Navigation/types'
import useChangeAvatar from './useChangeAvatar'
import Header from '../../components/Header'

const ChangeAvatar = ({ navigation,
    route,
}: RootStackScreenProps<"ChangeAvatar">) => {
    const {
        handleGoBack,
        state
    } = useChangeAvatar({
        navigation,
        route,
    });
    return (
        <View>
            <Header
                title="Edit Profile"
                onBackPress={handleGoBack}
            />
            <ProfileImage />
        </View>
    )
}

export default ChangeAvatar

const styles = StyleSheet.create({})