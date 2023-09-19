import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MyHeader from '../../components/MyHeader'
import AntDesign from "react-native-vector-icons/AntDesign";
import MyText from '../../components/MyText';
import { Colors } from '../../constants/Colors';
import CardItem from '../../components/CardItem';
import MyButton from '../../components/MyButton';

const PlayerProfile = ({ navigation }) => {
    const goToEditPlayerProfile = () => navigation.navigate('EditPlayerProfile')
    return (
        <View style={styles.container}>
            <MyHeader title={"Player Profile"} backgroundColor={"#FBF1D8"} />
            <View
                style={{
                    backgroundColor: "#FBF1D8",
                    padding: 20,
                    borderBottomLeftRadius: 70,
                    borderBottomRightRadius: 70,
                }}
            >
                <Image
                    source={require("../../assets/images/group904.png")}
                    style={{
                        alignSelf: "center",
                        width: 100,
                        height: 100,
                        borderWidth: 2,
                        borderColor: Colors.darkslategray,
                        borderRadius: 100
                    }}
                />
                <MyText text='Kenny Ray Carter' center={true} fontsize={20} />
                <TouchableOpacity onPress={goToEditPlayerProfile}>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                        View Full Profile <AntDesign name="right" />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainView}>
                <MyText text='View' fontsize={18} fontFamily="BOLD" />
                <View style={{ height: '3%' }} />
                <CardItem Title={"Attendance"} subTitle={"Player attendance history"} isImage={true} />
                <CardItem Title={"Evaluation"} subTitle={"Player perfomance progress "} isImage={true} />
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <MyButton
                    title="Delete Batch"
                    width={"90%"}
                    alignSelf="center"
                    backgroundColor={"#303030"}
                />
            </View>
        </View>
    )
}

export default PlayerProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainView: {
        padding: 20,
    },
})