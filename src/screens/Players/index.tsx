import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import Header from "../../components/MyHeader";
import SearchBar from "../../components/SearchBox";
import CardItem from "../../components/CardItem";
import FAB from "../../components/FAB";

import usePlayers from "./usePlayers";
import MyText from "../../components/MyText";
import ScreensName from "../../constants/ScreenNames";
import { styles } from "./styles";
import group902 from "../../assets/images/manage_1.png";

const Players = ({ navigation }) => {
  const {
    state: { playerList },
    debouncedOnChangeSearchBar,
    goToCreatePlayer,
    goToPlayerProfile,
  } = usePlayers();
  const renderPlayersList = () => {
    return (
      <View style={{marginBottom:20}}>
        <SearchBar onChange={debouncedOnChangeSearchBar} />
        {!playerList ||
          (playerList.length === 0 && (
            <View style={styles.noPlayersContainer}>
              <Image source={group902} />
              <Text style={styles.noPlayersText}>No Players Found</Text>
            </View>
          ))}
        {playerList
          .slice()
          .reverse()
          .map((player) => {
            const { _id, first_name, last_name, profile_pic } = player;
            const imageSource = profile_pic?.filedata?.length
              ? `data:image/png;base64,${profile_pic.filedata}`
              : null;
            return (
              <CardItem
                key={_id}
                Title={`${first_name} ${last_name}`}
                onPress={() => goToPlayerProfile(_id)}
                isImage={!!imageSource}
                imageSource={imageSource}
              />
            );
          })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Manage" screen={ScreensName.Players} />
      <ScrollView style={styles.mainView}>
        <MyText text="Players." fontFamily="BOLD" fontsize={24} />
        <MyText
          text="List of all your players."
          fontFamily="LIGHT"
          fontsize={15}
        />
        {renderPlayersList()}
      </ScrollView>
      <FAB onPress={goToCreatePlayer} />
    </View>
  );
};

export default Players;
