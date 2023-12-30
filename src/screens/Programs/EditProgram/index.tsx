import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { TextInput } from "react-native-paper";
import Header from '../../../components/MyHeader';
import { Colors } from '../../../constants/Colors';
import MyButton from '../../../components/MyButton';
import MyText from '../../../components/MyText';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useEditProgram } from './useEditProgram';
import WarningModal from '../../../components/WarningModal';

const EditProgram = () => {
    const {
        programName,
        programDesc,
        setProgramName,
        setProgramDesc,
        handleDeleteProgram,
        programInfo,
        handleSavePrograms,
        showModal,
        setShowModal,
    } = useEditProgram()
    return (
        <View style={styles.container}>
            <Header
                title={"Edit Program"}
                hasActionIcon
                actionBtnPress={() => handleSavePrograms()}
                ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
                isActionBtnDisabled={!programName || !programDesc}
            />
            <View style={styles.mainView}>
                <MyText text={"Edit Program Details."} fontsize={24} fontFamily="BOLD" />
                <MyText text={"Edit the name & description of this program."} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                <View style={{ height: '15%' }} />
                <TextInput
                    mode="outlined"
                    label="Program Name"
                    placeholder="Program Name"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={programName}
                    onChangeText={(text) => setProgramName(text)}
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                    }}
                    contentStyle={{color: "#000"}}
                />
                <View style={{ height: "6%" }} />
                <TextInput
                    mode="outlined"
                    label="Program Description"
                    placeholder="Program Description"
                    value={programDesc}
                    multiline
                    placeholderTextColor={"#000"}
                    activeOutlineColor="grey"
                    style={{
                        borderBottomWidth: 0,
                        borderColor: "grey",
                        backgroundColor: 'white',
                    }}
                    contentStyle={{color: "#000"}}
                    onChangeText={(text) => setProgramDesc(text)}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <MyButton
                    width={"90%"}
                    alignSelf="center"
                    title={"Delete Program"}
                    backgroundColor={Colors.darkGray}
                    onPress={() => setShowModal(true)}
                    leftIcon={
                        <AntDesign name="delete" size={20} color={"#fff"} style={{ marginRight: 10 }} />
                    }
                />
            </View>
            <WarningModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                onDelete={() => handleDeleteProgram(programInfo?._id)}
                message={
                    <View style={{ flexDirection: 'row', paddingHorizontal: 14 }}>
                        <Text style={{ fontSize: 18 }}>
                            Are you sure that you want to delete this program:{' '}
                            <Text style={{ fontWeight: 'bold' }}>{programName}</Text>?
                        </Text>
                    </View>}
            />
        </View>
    )
}

export default EditProgram

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        padding: 20
    }
})