import { FlatList, Image, ScrollView, View } from 'react-native'
import React from 'react'
// component
import Header from '../../components/MyHeader'
import MyText from '../../components/MyText'
import SearchBox from '../../components/SearchBox'
import BatchCard from '../../components/BatchCard'
import FAB from '../../components/FAB'
// constants
import { Colors } from '../../constants/Colors'
// usePrograms
import usePrograms from './usePrograms'
// style
import { styles } from './style'

const Programs = ({ navigation, route }) => {
    const { state: { programList: programData }, goToProgramInfoScreen, handleCreateProgram } = usePrograms({ navigation, route }); // var
    const renderProgram = ({ item, index }) => (
        <BatchCard
            bathName={item?.name}
            batchSubData={item?.sessions.length}
            bacthIndex={index}
            onPress={() => goToProgramInfoScreen(item)}
        />
    )
    const renderEmptyProgram = () => (
        <View style={styles.noDataFound}>
            <Image source={require("../../assets/images/manage_2.png")} />
            <MyText text=' No Programs Found' color={Colors.gray} />
        </View>
    )
    return (
        <View style={styles.container}>
            <Header title='Manage' />
            <ScrollView style={styles.mainView}>
                <MyText text="Programs." fontFamily="BOLD" fontsize={25} />
                <MyText text="List of all your programs." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
                <SearchBox />
                <FlatList
                    data={programData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderProgram}
                    ListEmptyComponent={renderEmptyProgram}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{ flexGrow: 1, marginBottom: 20 }}
                />
            </ScrollView>
            <FAB onPress={handleCreateProgram} />
        </View>
    )
}

export default Programs