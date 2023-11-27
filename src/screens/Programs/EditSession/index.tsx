import { StyleSheet, View } from 'react-native'
import React from 'react'
// pakages
import { TextInput } from "react-native-paper";
// components
import Header from '../../../components/MyHeader';
import MyButton from '../../../components/MyButton';
import MyText from '../../../components/MyText';
import AntDesign from "react-native-vector-icons/AntDesign";
// contants
import { Colors } from '../../../constants/Colors';
import useEditSession from './useEditSession';

const EditSession = () => {
    const {
        sessionName,
        sessionDescription,
        sessionDuration,
        setSessionName,
        setSessionDescription,
        setSessionDuration
    } = useEditSession()
    return (
        <View style={styles.container}>
            <Header
                title={"Edit Session"}
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
                    label="Session Duration"
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
                    label="Session Duration"
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