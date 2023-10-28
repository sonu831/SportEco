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
    handleCurrentParticipantRemove,
    toggleSelection,
    remainingParticipants,
    handleAddPlayerInBatch,
    currentParticipantsList,
  } = useAddRemovePlayer();

  return (
    <View style={styles.container}>
      <Header
        title="Add Player"
        hasActionIcon
        actionBtnPress={handleAddPlayerInBatch}
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
        isActionBtnDisabled={!remainingParticipants}
      />
      <ScrollView
        style={styles.mainView}
        contentContainerStyle={{
          paddingBottom: "10%",
        }}
      >
        {remainingParticipants?.length || currentParticipantsList.length > 0 ? (
          <View>
            <SearchBox />
            <FlatList
              data={remainingParticipants}
              renderItem={({ item, index }) => {
                return (
                  <PlayerCard
                    key={`player-${item._id}`}
                    playerName={item.first_name}
                    lastName={item.last_name}
                    isSelected={item.isSelected}
                    onPress={() => toggleSelection(item)}
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
                    <View>
                      {currentParticipantsList.length > 0 ? (
                        currentParticipantsList.map((item, index) => (
                          <PlayerCard
                            key={index.toString()}
                            playerName={item.name}
                            hasRemoveBtn
                            onPress={() => handleCurrentParticipantRemove(item)}
                          />
                        ))
                      ) : (
                        <View
                          style={{
                            width: "100%",
                            alignItems: "center",
                            height: "250px",
                            marginTop: "10%",
                            marginBottom: "10%",
                          }}
                        >
                          <Image
                            source={require("../../../assets/images/manage_1.png")}
                          />
                          <Text
                            style={{
                              color: "grey",
                            }}
                          >
                            No Current Participants
                          </Text>
                        </View>
                      )}
                    </View>
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
        <MyButton title="+  Create Player" style={styles.createButton} />
      </ScrollView>
    </View>
  );
};

export default AddRemovePlayer;
