import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import Header from '../../../components/MyHeader';
import Feather from "react-native-vector-icons/Feather";
import MyText from '../../../components/MyText';
import { Colors } from '../../../constants/Colors';


const SessionDetails = ({ navigation }) => {
    const goToEditSessionScreen = (sessionInfo: any) => navigation.navigate('EditSession', { sessionInfo: sessionInfo })
    const route = useRoute();
    const { sessionInfo } = route.params
    return (
        <View style={styles.container}>
            <Header
                title=""
                hasActionIcon
                actionBtnPress={() => goToEditSessionScreen(sessionInfo)}
                ActionIcon={<Feather name="edit" size={18} color={"#fff"} />}
            />
            <View style={styles.mainView}>
                <MyText text={sessionInfo.name ? sessionInfo.name : ''} fontsize={24} fontFamily="BOLD" />
                <MyText text={sessionInfo?.description ? sessionInfo?.description : ""} fontsize={13} fontFamily="MEDIUM" color={Colors.darkGray} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyText text='Duration' fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                    <MyText text={sessionInfo?.duration ? sessionInfo?.duration : ""} fontsize={13} fontFamily="MEDIUM" color={Colors.darkGray} />
                </View>
            </View>
        </View>
    )
}

export default SessionDetails

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        padding: 20
    }
})