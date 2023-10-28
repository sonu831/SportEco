import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchBox from "../../../components/SearchBox";
import MyButton from "../../../components/MyButton";
import useAddRemovePlayer from "./useAddRemovePlayer";
import PlayerCard from "../../../components/Players/PlayerCard";

const AddRemovePlayer = ({ navigation, route }) => {
  const {
    playersList,
    selectedPlayers,
    setSelectedPlayers,
    addPlayerToBatch,
    handlePlayerSelection,
    handleAddPlayerInBatch,
    saveDeletePlayer,
    currentParticipants,
  } = useAddRemovePlayer();

  return (
    <View style={styles.container}>
      <Header
        title="Add Player"
        hasActionIcon
        actionBtnPress={handleAddPlayerInBatch}
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
        isActionBtnDisabled={!selectedPlayers}
      />
      <ScrollView
        style={styles.mainView}
        contentContainerStyle={{
          paddingBottom: "10%",
        }}
      >
        {playersList?.length > 0 ? (
          <View>
            <SearchBox />
            <FlatList
              data={playersList}
              renderItem={({ item, index }) => {
                const isSelected = selectedPlayers.findIndex(
                  (e) => e._id == item._id
                );
                return (
                  <PlayerCard
                    playerName={item.first_name}
                    lastName={item.last_name}
                    isSelected={isSelected > -1 ? true : false}
                    onPress={() => saveDeletePlayer(item)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 10,
                      }}
                    >
                      <View style={{ borderWidth: 0.2, width: "30%" }} />
                      <Text
                        style={{
                          marginHorizontal: 10,
                          fontSize: 16,
                          fontWeight: "800",
                        }}
                      >
                        Current Participants
                      </Text>
                      <View style={{ borderWidth: 0.2, width: "30%" }} />
                    </View>
                    {currentParticipants.map((item, index) => {
                      return (
                        <PlayerCard
                          key={index.toString()}
                          playerName={item.name}
                          hasRemoveBtn={true}
                        />
                      );
                    })}
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View
            style={{
              height: Dimensions.get("screen").height / 1.5,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/images/manage_1.png")} />
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
        <MyButton width={"90%"} title="+  Create Player" alignSelf="center" />
      </ScrollView>
    </View>
  );
};

export default AddRemovePlayer;
