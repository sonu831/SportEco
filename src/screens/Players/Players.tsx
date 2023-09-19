import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/MyHeader'
import SearchBar from '../../components/SearchBox';
import CardItem from '../../components/CardItem';
import FAB from '../../components/FAB';
import { Colors } from '../../constants/Colors';

const Players = ({ navigation }) => {
    const goToCreatePlayer = () => navigation.navigate('CreatePlayer')
    const playersData = [1, 2, 3];
    return (
        <View style={styles.container}>
            <Header title='Manage' />
            <View style={styles.mainView}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Players.</Text>
                <Text style={{ marginVertical: 10 }}>List of all your players.</Text>
                {playersData.length > 0 ?
                    (<View>
                        <SearchBar />
                        <CardItem Title={"John Wick"} isImage={true} />
                        <CardItem Title={"Tom Carter"} isImage={true} />
                        <CardItem Title={"Peter Quill"} isImage={true} />
                        <CardItem Title={"Calvin Harris"} isImage={true} />
                    </View>)
                    :
                    <View
                        style={{
                            height: "75%",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image source={require("../../assets/images/manage_1.png")} />
                        <Text
                            style={{
                                color: "grey",
                                letterSpacing: 2,
                            }}
                        >
                            No Players Found
                        </Text>
                    </View>
                }
            </View>
            <FAB onPress={goToCreatePlayer} />
        </View>
    )
}

export default Players

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    mainView: {
        padding: 20
    }
})