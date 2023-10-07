import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ProgramsStyle'
import Header from '../../../components/MyHeader'
import MyText from '../../../components/MyText'
import { Colors } from '../../../constants/Colors'
import SearchBox from '../../../components/SearchBox'
import BatchCard from '../../../components/BatchCard'
import FAB from '../../../components/FAB'


const Programs = ({ navigation }) => {
    const goToCreatePrograms = () => navigation.navigate('CreatePrograms')
    let programData = [
        {
            id: 0,
            batch_name: "Badminton Drill Routine",
            players: [1]
        },
        {
            id: 1,
            batch_name: "Badminton Drill Routine",
            players: [1, 2]
        },
        {
            id: 2,
            batch_name: "Badminton Drill Routine",
            players: [1, 2, 3, 4, 5]
        }
    ]
    return (
        <View style={styles.container}>
            <Header title='Manage' />
            <View style={styles.mainView}>
                <MyText text="Programs." fontFamily="BOLD" fontsize={25} />
                <MyText text="List of all your programs." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
                {
                    programData.length > 0 ?
                        <View>
                            <SearchBox />
                            <FlatList
                                data={programData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <BatchCard
                                            bacthItem={item}
                                            bacthIndex={index}
                                        // onPress={() => gotoBatchInfo(item)}
                                        />
                                    )
                                }}
                                showsHorizontalScrollIndicator={true}
                                contentContainerStyle={{ flexGrow: 1 }}
                            />
                        </View>
                        :
                        <View
                            style={{
                                height: "75%",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image source={require("../../../assets/images/manage_2.png")} />
                            <Text
                                style={{
                                    color: "grey",
                                    letterSpacing: 2,
                                }}
                            >
                                No Batches Found
                            </Text>
                        </View>
                }
            </View>
            <FAB onPress={() => goToCreatePrograms()} />
        </View>
    )
}

export default Programs