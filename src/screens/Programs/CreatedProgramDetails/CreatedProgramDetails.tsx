import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/MyHeader'
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyText from '../../../components/MyText';
import { Colors } from '../../../constants/Colors';
import { useRoute } from "@react-navigation/native";
import SearchBox from '../../../components/SearchBox';
import AntDesign from "react-native-vector-icons/AntDesign";
import { getProgromDataById } from '../../../services/programs';
import { AppDispatch } from '../../../store';
import { useDispatch } from 'react-redux';

const CreateProgramDetails = ({ navigation }) => {
    const route = useRoute();
    const { programId } = route?.params
    const dispatch = useDispatch<AppDispatch>();
    const goToCreateProgramsScreen = () => navigation.navigate('CreatePrograms', { editProgramName: programName, editProgramDescription: programDescription })
    const [programDetails, setProgramDetails] = useState("")
    const currentSessions = [
        { id: 1, name: "Badminton League", time: "02 hours 30 min" },
        { id: 2, name: "Badminton League", time: "02 hours 30 min" },
        { id: 3, name: "Badminton League", time: '02 hours 30 min' },
    ];
    useEffect(() => {
        getProgramDetails(programId)
    }, [programId])
    const getProgramDetails = (programId) => { //Funtion:Api Function to create program
        dispatch(getProgromDataById(programId)).then((res) => {
            setProgramDetails(res?.payload?.data)
        }).catch((error) => {
            console.error("Error occurred while getProgramDetails:", error);
        })
    };
    console.log("programDetails", programDetails);

    return (
        <View style={styles.container}>
            <Header
                title=""
                hasActionIcon
                actionBtnPress={() => goToCreateProgramsScreen()}
                ActionIcon={<Feather name="edit" size={18} color={"#fff"} />}
            />
            <View style={styles.mainView}>
                {/* <MyText text={programName ? programName : ''} fontsize={24} fontFamily="BOLD" /> */}
                <MyText text={programDetails ? programDetails?.description : ''} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                <View style={{ height: '5%' }} />
                <SearchBox />
                <View style={{ height: '3%' }} />
                {programDetails && programDetails?.sessions.map((item, index) => {
                    return (
                        <PlayerCard
                            key={index.toString()}
                            playerName={item.name}
                            playerTime={item.duration}
                            hasRemoveBtn={true}
                            onPress={() => navigation.navigate('SessionDetails', { sessionName: item.name, sessionDescription: item.time })}
                        />
                    );
                })}
            </View>
        </View>
    )
}

export default CreateProgramDetails

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
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={{ backgroundColor: Colors.gray3, padding: 8, borderRadius: 6 }}>
                    <Image source={require('../../../assets/images/Icon_badminton.png')} style={{ width: 30, height: 30 }} />
                </View>
                <View>
                    <MyText text={playerName} fontFamily="MEDIUM" fontsize={16} style={{ marginLeft: 10 }} />
                    <MyText text={playerTime} fontFamily="MEDIUM" fontsize={16} style={{ marginLeft: 10 }} color={Colors.gray2} />
                </View>
            </View>
            {hasRemoveBtn ? (
                <AntDesign name="right" style={{ marginRight: 5 }} />
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