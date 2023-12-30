import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// components
import Header from '../../../components/MyHeader';
import MyText from '../../../components/MyText';
import { CenteredLineWithText } from '../../../components';
import MyButton from "../../../components/MyButton";
// constants
import { Colors } from '../../../constants/Colors';
// packages
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-paper";
// custom hook
import { useCreateProgram } from './useCreateProgram';

const CreatePrograms = () => {
    const {
        programName,
        setProgramName,
        programDescription,
        setProgramDescription,
        handleCreateProgram,
    } = useCreateProgram()
    return (
        <View style={styles.container}>
            <Header
                title={"Create Program"}
                hasActionIcon
                actionBtnPress={handleCreateProgram}
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
                    onChangeText={setProgramName}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                    }}
                    contentStyle={{color: "#000"}}
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
                    }}
                    contentStyle={{color: "#000"}}
                    onChangeText={setProgramDescription}
                />
                <View style={{ height: "3%" }} />
                <CenteredLineWithText lineText={"Sessions"} />
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