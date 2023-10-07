import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import Header from '../../../components/MyHeader';
import Feather from "react-native-vector-icons/Feather";
import MyText from '../../../components/MyText';
import { Colors } from '../../../constants/Colors';


const SessionDetails = ({ navigation }) => {
    const goToEditSessionScreen = (sessionName: any, sessionDescription: any) => navigation.navigate('EditSession', { editSessionName: sessionName, editSessionDes: sessionDescription })
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Header
                title=""
                hasActionIcon
                actionBtnPress={() => goToEditSessionScreen(route?.params?.sessionName, route?.params?.sessionDescription)}
                ActionIcon={<Feather name="edit" size={18} color={"#fff"} />}
            />
            <View style={styles.mainView}>
                <MyText text={route?.params?.sessionName ? route?.params?.sessionName : ''} fontsize={24} fontFamily="BOLD" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyText text='Duration' fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                    <MyText text={route?.params?.sessionDescription ? route?.params?.sessionDescription : ""} fontsize={13} fontFamily="MEDIUM" color={Colors.darkGray} />
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