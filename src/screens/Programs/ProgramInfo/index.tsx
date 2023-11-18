import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// component
import Header from '../../../components/MyHeader'
import MyText from '../../../components/MyText';
import SearchBox from '../../../components/SearchBox';
// packages
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
// custom hook
import { useProgramInfo } from './useProgramInfo';
// constants
import { Colors } from '../../../constants/Colors';
// styles
import { styles } from '../style';
import FAB from '../../../components/FAB';

const ProgramInfo = ({ navigation }) => {
    const { programDetails, goToAddSession, goToEditProgram } = useProgramInfo();
    return (
        <View style={styles.container}>
            <Header
                title=""
                hasActionIcon
                actionBtnPress={() => goToEditProgram()}
                ActionIcon={<Feather name="edit" size={18} color={"#fff"} />}
            />
            <View style={styles.mainView}>
                {/* <MyText text={programDetails?.name} fontsize={24} fontFamily="BOLD" /> */}
                <MyText text={programDetails?.description} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
                <SearchBox />
                {programDetails?.sessions.length > 0 && programDetails?.sessions.map((item, index) => {
                    return (
                        <PlayerCard
                            key={index.toString()}
                            playerName={item?.name}
                            playerTime={item?.duration}
                            hasRemoveBtn={true}
                            onPress={() => navigation.navigate('SessionDetails', { sessionName: item?.name, sessionDuration: item?.duration, sessionDescription: item?.description })}
                        />
                    );
                })}
            </View>
            <FAB onPress={() => goToAddSession(programDetails)} />
        </View>
    )
}

export default ProgramInfo

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