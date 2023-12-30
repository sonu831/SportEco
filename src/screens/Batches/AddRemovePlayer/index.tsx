import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchBox from "../../../components/SearchBox";
import MyButton from "../../../components/MyButton";
import useAddRemovePlayer from "./useAddRemovePlayer";
import PlayerCard from "../../../components/Players/PlayerCard";
import ScreensName from "../../../constants/ScreenNames";
import { Colors } from "../../../constants/Colors";
import WarningModal from "../../../components/WarningModal";

const AddRemovePlayer = ({ navigation, route }) => {
  const {
    allPlayers,
    handleCurrentParticipantRemove,
    toggleSelection,
    remainingParticipants,
    handleAddPlayerInBatch,
    currentParticipantsList,
    navigateToCreatePlayer,
    showModal, 
    setShowModal,
  } = useAddRemovePlayer();

  const height = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <Header
        title="Add Player"
        hasActionIcon
        actionBtnPress={handleAddPlayerInBatch}
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
        isActionBtnDisabled={!remainingParticipants}
      />
      <View
        style={styles.mainView}
      >
        {remainingParticipants?.length ||
          currentParticipantsList?.length ||
          allPlayers.length ? (
          <View>
            <SearchBox />
            <FlatList
              style={{ height: height - 250 }}
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
                          <View>
                            <PlayerCard
                              key={index.toString()}
                              playerName={item.name}
                              hasRemoveBtn
                              onPress={() => setShowModal(true)}
                            />
                            <WarningModal
                              key={new Date().toString()}
                              isVisible={showModal}
                              onClose={() => setShowModal(false)}
                              onDelete={()=> handleCurrentParticipantRemove(item)}
                              message={
                                <View style={{ flexDirection: 'row', paddingHorizontal: 14 }}>
                                  <Text style={{ fontSize: 18 }}>
                                    Are you sure that you want to remove{' '}
                                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                    {' '}from this batch?
                                  </Text>
                                </View>}
                            /></View>
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
            <MyButton title="Create Player" style={styles.createButton} onPress={navigateToCreatePlayer} leftIcon={
              <AntDesign name="plus" style={{ marginRight: 5 }} color={Colors.white} size={18} />
            } />
          </View>
    </View>
      );
};

      export default AddRemovePlayer;
