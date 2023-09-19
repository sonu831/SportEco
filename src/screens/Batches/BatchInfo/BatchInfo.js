import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./BatchInfoStyle";
import Header from "../../../components/MyHeader";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FAB from "../../../components/FAB/index";
import SearchBox from "../../../components/SearchBox";

const BatchInfo = ({ navigation }) => {
  const gotoEditBatchInfo = () => navigation.navigate("EditBatchInfo");

  const playersData = [1, 2, 3];
  return (
    <View style={styles.container}>
      <Header
        hasActionIcon
        actionBtnPress={gotoEditBatchInfo}
        ActionIcon={<Feather name="edit" size={18} color={"#fff"} />}
      />
      <View style={styles.mainView}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Morning Senior Batch
        </Text>
        <Text style={{ marginVertical: 10 }}>
          Tennis players of age group 8-12. Focus is on developing fundamental
          tennis skills, promoting teamwork, and fostering their passion for the
          game.
        </Text>
        {playersData.length > 0 ? (
          <View>
            <SearchBox />
            <BatchMemberCard />
            <BatchMemberCard />
            <BatchMemberCard />
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
      </View>
      <FAB />
    </View>
  );
};

export default BatchInfo;

const BatchMemberCard = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
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
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          John Wick
        </Text>
      </View>

      <AntDesign name="right" size={16} />
    </TouchableOpacity>
  );
};
