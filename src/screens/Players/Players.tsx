import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../../components/MyHeader";
import SearchBar from "../../components/SearchBox";
import CardItem from "../../components/CardItem";
import FAB from "../../components/FAB";
import { Colors } from "../../constants/Colors";
import usePlayers from "./usePlayers";

const Players = ({ navigation }) => {
  const {
    state: { playerList: playersData },
  } = usePlayers({ navigation });
  const goToCreatePlayer = () => navigation.navigate("CreatePlayer");
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Players.</Text>
        <Text style={{ marginVertical: 10 }}>List of all your players.</Text>
        {playersData.length > 0 ? (
          <View>
            <SearchBar />
            {playersData?.map((item) => (
              <CardItem
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
        )}
      </View>
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
