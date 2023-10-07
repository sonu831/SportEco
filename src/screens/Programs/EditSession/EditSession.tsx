import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from "react-native-paper";
import Header from '../../../components/MyHeader';
import { Colors } from '../../../constants/Colors';
import MyButton from '../../../components/MyButton';
import MyText from '../../../components/MyText';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute } from '@react-navigation/native';

const EditSession = () => {
    const route = useRoute();
    const [sessionName, setSessionName] = useState(route?.params?.editSessionName ? route?.params?.editSessionName : '')
    const [sessionDescription, setSessionDescription] = useState(route?.params?.editSessionDes ? route?.params?.editSessionDes : '')
    const [sessionDuration, setSessionDuration] = useState('')
    return (
        <View style={styles.container}>
            <Header
                title={route?.params?.editSessionName.length > 0 && "Edit Program"}
                hasActionIcon
                actionBtnPress={() => { }}
                ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
                isActionBtnDisabled={!sessionName || !sessionDescription}
            />
            <View style={styles.mainView}>
                <MyText text={"Enter Sesion Details."} fontsize={24} fontFamily="BOLD" />
                <MyText text={"Edit the name & description of this session"} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                <View style={{ height: '15%' }} />
                <TextInput
                    mode="outlined"
                    label="Session Name"
                    placeholder="Enter Session Name"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={sessionName}
                    onChangeText={(text) => setSessionName(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2
                    }}
                />
                <View style={{ height: "6%" }} />
                <TextInput
                    mode="outlined"
                    label="Enter Session Duration"
                    placeholder="Enter Session Duration"
                    value={sessionDescription}
                    multiline
                    placeholderTextColor={"#000"}
                    activeOutlineColor="grey"
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2
                    }}
                    onChangeText={(text) => setSessionDescription(text)}
                />
                <View style={{ height: "6%" }} />

                <TextInput
                    mode="outlined"
                    label="Enter Session Duration"
                    placeholder="Enter Session Duration"
                    value={sessionDuration}
                    multiline
                    placeholderTextColor={"#000"}
                    activeOutlineColor="grey"
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2
                    }}
                    onChangeText={(text) => setSessionDuration(text)}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <MyButton
                    width={"90%"}
                    alignSelf="center"
                    title={"Delete Sessions"}
                    backgroundColor={Colors.darkGray}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default EditSession

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        padding: 20
    }
})