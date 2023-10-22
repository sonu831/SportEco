import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/MyHeader";
import SearchBar from "../../components/SearchBox";
import CardItem from "../../components/CardItem";
import FAB from "../../components/FAB";
import { Colors } from "../../constants/Colors";
import usePlayers from "./usePlayers";
import MyText from "../../components/MyText";

const Players = ({ navigation, route }) => {
  const {
    state: { playerList: playersData },
    onChangeSearchBar,
  } = usePlayers({ navigation, route });
  const goToCreatePlayer = () => navigation.navigate("PlayerProfileManager");
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <ScrollView style={styles.mainView}>
        <MyText text="Players." fontFamily="BOLD" fontsize={24} />
        <MyText
          text="List of all your players."
          fontFamily="LIGHT"
          fontsize={15}
        />
        {playersData?.length > 0 ? (
          <View>
            <SearchBar onChange={onChangeSearchBar} />
            {JSON.parse(JSON.stringify(playersData))
              .reverse()
              ?.map((item) => (
                <CardItem
                  key={`player-key-${item.first_name} ${item.last_name}`}
                  Title={`${item.first_name} ${item.last_name}`}
                  isImage={true}
                  onPress={() =>
                    navigation.navigate("PlayerProfile", { id: item._id })
                  }
                />
              ))}
          </View>
        ) : (
          <View
            style={{
              marginTop: "50%",
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
        )}
      </ScrollView>
      <FAB onPress={goToCreatePlayer} />
    </View>
  );
};

export default Players;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    padding: 20,
  },
});
