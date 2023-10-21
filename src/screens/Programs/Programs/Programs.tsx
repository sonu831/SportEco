import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
// component
import Header from '../../../components/MyHeader'
import MyText from '../../../components/MyText'
import SearchBox from '../../../components/SearchBox'
import BatchCard from '../../../components/BatchCard'
import FAB from '../../../components/FAB'
// constants
import { Colors } from '../../../constants/Colors'
// usePrograms
import usePrograms from '../usePrograms'
// style
import { styles } from './ProgramsStyle'

const Programs = ({ navigation, route }) => {
    const { state: { programList: programData } } = usePrograms({ navigation, route }); // var
    const goToCreatePrograms = () => navigation.navigate('CreatePrograms') // var
    const goToProgramDetails = (programId) => navigation.navigate('CreateProgramDetails', { programId: programId })
    return (
        <View style={styles.container}>
            <Header title='Manage' />
            <ScrollView style={styles.mainView}>
                <MyText text="Programs." fontFamily="BOLD" fontsize={25} />
                <MyText text="List of all your programs." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
                {
                    programData?.length > 0 ?
                        <>
                            <SearchBox />
                            <FlatList
                                data={programData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <BatchCard
                                            bacthItem={item}
                                            bacthIndex={index}
                                            onPress={() => goToProgramDetails(item?._id)}
                                        />
                                    )
                                }}
                                showsHorizontalScrollIndicator={true}
                                contentContainerStyle={{ flexGrow: 1 }}
                            />
                        </>
                        :
                        <View style={styles.noDataFound}>
                            <Image source={require("../../../assets/images/manage_2.png")} />
                            <MyText text=' No Programs Found' color={Colors.gray} />
                        </View>
                }
            </ScrollView>
            <FAB onPress={() => goToCreatePrograms()} />
        </View>
    )
}

export default Programs