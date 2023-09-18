import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../../../components/MyHeader";
import { styles } from "./BatchesStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FAB from "../../../components/FAB";
import SearchBox from "../../../components/SearchBox";

const Batches = ({ navigation }) => {
  const gotoCreateBatch = () => navigation.navigate("CreateBatch");
  const gotoBatchInfo = () => navigation.navigate("BatchInfo");
  const batchesData = [1, 2, 3];
  //UI
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Batches.</Text>
        <Text style={{ marginVertical: 10 }}>List of all your batches.</Text>
        {batchesData.length > 0 ? (
          <View>
            <SearchBox />
            <BatchCard onPress={() => gotoBatchInfo()} />
            <BatchCard onPress={() => gotoBatchInfo()} />
            <BatchCard onPress={() => gotoBatchInfo()} />
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
            <Image source={require("../../../assets/images/manage_2.png")} />
            <Text
              style={{
                color: "grey",
                letterSpacing: 2,
              }}
            >
              No Batches Found
            </Text>
          </View>
        )}
      </View>
      <FAB onPress={gotoCreateBatch} />
    </View>
  );
};

export default Batches;

const BatchCard = ({ onPress = () => { } }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0.5,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: "#fff",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "#EEECEE", padding: 5 }}>
          <Ionicons name="basketball-outline" size={24} />
        </View>

        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "500" }}>Morning Senior Batch</Text>
          <Text>29 Players</Text>
        </View>
      </View>

      <AntDesign name="right" />
    </TouchableOpacity>
  );
};
