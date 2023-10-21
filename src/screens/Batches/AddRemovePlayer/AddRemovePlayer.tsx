import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { styles } from "./AddRemovePlayerStyle";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchBox from "../../../components/SearchBox";
import MyButton from "../../../components/MyButton";
import MyText from "../../../components/MyText";
import useBatches from "../useBatches";
import { addPlayersInBatch } from "../../../services/batches";
import { useDispatch } from "react-redux";

const AddRemovePlayer = ({ navigation, route }) => {
  const goToBacthesScreen = () => navigation.navigate("Batches");
  const dispatch = useDispatch<import("../../../store").AppDispatch>();
  const { playersList } = useBatches({ navigation, route }); // var
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const currentParticipants = [
    { id: 1, name: "Miles Morales" },
    { id: 2, name: "Gwen Stacy" },
    { id: 3, name: "May Parker" },
  ];

  const handleAddPlayerInBatch = () => {
    const request = {
      batch_id: route.params.batch_Id,
      players: [
        {
          playerid: "6512f1f92feb5c05bb8c8624",
          name: "vishal",
        },
      ],
    };
    dispatch(addPlayersInBatch(request)).then((res) => {
      // const resData = res.payload?.data;
      goToBacthesScreen();
    });
  };
  //function : imp func
  const saveDeletePlayer = (item: any) => {
    const isAlready = selectedPlayers.findIndex((e) => e._id == item._id);
    if (isAlready > -1) {
      const filteredData = selectedPlayers.filter((e) => e._id != item._id);
      setSelectedPlayers(filteredData);
    } else {
      setSelectedPlayers([...selectedPlayers, item]);
    }
  };
  //ui
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
        {playersList.length > 0 ? (
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

const PlayerCard = ({
  playerName,
  lastName,
  isSelected,
  hasRemoveBtn,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: isSelected ? 1.5 : 0.5,
        borderColor: isSelected ? "#27AE60" : "grey",
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/images/group904.png")}
          style={{ width: 44, height: 44 }}
        />
        <MyText
          text={playerName + lastName}
          fontFamily="MEDIUM"
          fontsize={16}
          style={{ marginLeft: 10 }}
        />
      </View>
      {hasRemoveBtn ? (
        <Feather name="x-circle" size={24} color={"grey"} />
      ) : (
        <Ionicons
          name={isSelected ? "checkbox" : "square-outline"}
          color={isSelected ? "#27AE60" : "grey"}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};
