import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/MyHeader'
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyText from '../../../components/MyText';
import { Colors } from '../../../constants/Colors';
import { TextInput } from "react-native-paper";
import { CenteredLineWithText } from '../../../components';
import MyButton from "../../../components/MyButton";
import { AppDispatch } from '../../../store';
import { useDispatch } from 'react-redux';
import { addSessionInProgram } from '../../../services/programs';

const CreateSession = ({ navigation, route }) => {
    const { programId } = route.params
    console.log("programId---s---", programId);

    const goToProgramsScreen = () => navigation.navigate('Programs')
    const dispatch = useDispatch<AppDispatch>();
    const [sessionName, setSessionName] = useState('')
    const [sessionDescription, setSessionDescription] = useState('')
    const [sessionDuration, setSessionDuration] = useState('')
    const handleCreaterSession = () => { // Function: to create session
        const request = {
            program_id: programId,
            sessions: [
                {
                    name: sessionName,
                    description: sessionDescription,
                    duration: sessionDuration,
                }
            ]
        };
        console.log("request", request)
        dispatch(addSessionInProgram({ data: request })).then((res) => {
            console.log("handleCreaterSession res", res);
            goToProgramsScreen()
            // goToCreateProgramDetails(programName, programDescription)
        });
    };
    return (
        <View style={styles.container}>
            <Header
                title="Create Session"
                hasActionIcon
                actionBtnPress={handleCreaterSession}
                ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
                isActionBtnDisabled={!sessionName || !sessionDescription || !sessionDuration}
            />
            <View style={styles.mainView}>
                <MyText text={"Enter Session Details."} fontsize={24} fontFamily="BOLD" />
                <MyText text={"Give a unique name & description to this session"} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                <View style={{ height: '8%' }} />
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
                <View style={{ height: "8%" }} />
                <TextInput
                    mode="outlined"
                    label="Enter Session Description"
                    placeholder="Enter Session Description"
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
                <View style={{ height: "8%" }} />
                <TextInput
                    mode="outlined"
                    label="Session Duration"
                    placeholder="Session Duration"
                    value={sessionDuration}
                    multiline
                    keyboardType='numeric'
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
        </View>
    )
}

export default CreateSession

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        padding: 20
    }
})