import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../../components/MyHeader'
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyText from '../../../components/MyText';
import { Colors } from '../../../constants/Colors';
import { TextInput } from "react-native-paper";
import { CenteredLineWithText } from '../../../components';
import MyButton from "../../../components/MyButton";
import { useRoute } from "@react-navigation/native";
import { addPrograms } from '../../../services/programs';
import { AppDispatch } from '../../../store';
import { useDispatch } from 'react-redux';
import { setToast } from '../../../store/Toast/reducers';
import CustomToast from '../../../components/Toast';


const CreatePrograms = ({ navigation }) => {
    const route = useRoute();
    const dispatch = useDispatch<AppDispatch>();
    const [programName, setProgramName] = useState(route?.params?.editProgramName ? route?.params?.editProgramName : '')
    const [programDescription, setProgramDescription] = useState(route?.params?.editProgramDescription ? route?.params?.editProgramDescription : '')
    const [programId, setProgramId] = useState("")
    useEffect(() => {
        if (programId) {
            navigation.replace('CreateProgramDetails', { programId: programId, programName: programName });
        }
    }, [programId]);
    const handleCreaterProgram = () => { //Funtion:Api Function to create program
        const request = {
            name: programName,
            description: programDescription,
        };
        dispatch(addPrograms({ data: request })).then((res) => {
            if (res?.payload?.success) {
                setProgramId(res?.payload?.data?._id)
            } else {
                setToast({
                    type: "error",
                    message: res?.payload?.data?.message,
                });
            }
            // goToProgramListScreen()
            // goToCreateProgramDetails(programName, programDescription)
        }).catch((error) => {
            console.error("Error occurred while adding program:", error);
        })
    };
    const goToCreateProgramDetails = (programName: string, programDescription: string) => navigation.navigate('CreateProgramDetails', { programName: programName, programDescription: programDescription })
    const goToProgramListScreen = () => navigation.navigate('Programs')
    const currentSessions = [
        { id: 1, name: "Badminton League", time: "02 hours 30 min" },
        { id: 2, name: "Badminton League", time: "02 hours 30 min" },
        { id: 3, name: "Badminton League", time: '02 hours 30 min' },
    ];
    return (
        <View style={styles.container}>
            <Header
                title={route?.params?.editProgramName.length > 0 ? "Edit Program" : "Create Program"}
                hasActionIcon
                actionBtnPress={handleCreaterProgram}
                ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
                isActionBtnDisabled={!programName || !programDescription}
            />
            <View style={styles.mainView}>
                <MyText text={"Enter Program Details."} fontsize={24} fontFamily="BOLD" />
                <MyText text={"Give a unique name & description to this program"} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                <View style={{ height: '10%' }} />
                <TextInput
                    mode="outlined"
                    label="Program Name"
                    placeholder="Enter Program Name"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={programName}
                    onChangeText={(text) => setProgramName(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2
                    }}
                />
                <View style={{ height: "3%" }} />
                <TextInput
                    mode="outlined"
                    label="Enter Program Description"
                    placeholder="Enter Program Description"
                    value={programDescription}
                    multiline
                    placeholderTextColor={"#000"}
                    activeOutlineColor="grey"
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                        color: Colors.black2
                    }}
                    onChangeText={(text) => setProgramDescription(text)}
                />
                <View style={{ height: "3%" }} />
                <CenteredLineWithText lineText={"Sessions"} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <MyButton
                    width={"90%"}
                    disabled={true}
                    alignSelf="center"
                    title={route?.params?.editProgramName.length > 0 ? "Delete Program" : "Add Sessions"}
                    backgroundColor={route?.params?.editProgramName.length ? Colors.darkGray : Colors.orange}
                    onPress={() => handleCreaterProgram()}
                />
            </View>
        </View>
    )
}

export default CreatePrograms

const PlayerCard = ({
    playerName,
    lastName,
    isSelected,
    hasRemoveBtn,
    playerTime,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: isSelected ? 1.5 : 0.5,
                borderColor: isSelected ? "#27AE60" : "grey",
                padding: 10,
                borderRadius: 15,
                marginVertical: 10,
                backgroundColor: Colors.gray1
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Image
                    source={require("../../../assets/images/Icon_badminton.png")}
                    style={{ width: 40, height: 40 }}
                />
                <View>
                    <MyText text={playerName} fontFamily="MEDIUM" fontsize={16} style={{ marginLeft: 10 }} />
                    <MyText text={playerTime} fontFamily="MEDIUM" fontsize={16} style={{ marginLeft: 10 }} color={Colors.gray2} />
                </View>
            </View>
            {hasRemoveBtn ? (
                <Feather name="x-circle" size={24} color={"grey"} />
            ) : (
                <Ionicons
                    name={isSelected ? "checkbox" : "square-outline"}
                    color={isSelected ? "#27AE60" : "grey"}
                    size={24}
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        padding: 20
    }
})