import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../../../components/MyHeader";
import { styles } from "./BatchesStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FAB from "../../../components/FAB";
import SearchBox from "../../../components/SearchBox";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";

const Batches = ({ navigation }) => {
  const gotoCreateBatch = () => navigation.navigate("CreateBatch");
  const gotoBatchInfo = () => navigation.navigate("BatchInfo");
  const batchesData = [1, 2, 3];
  //UI
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <MyText text="Batches." fontFamily="BOLD" fontsize={25} />
        <MyText text="List of all your batches." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
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
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: "#fff",
        padding: 12,
        borderColor: Colors.gray
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: Colors.gray3, padding: 8, borderRadius: 6 }}>
          <Ionicons name="basketball-outline" size={24} />
        </View>

        <View style={{ marginLeft: 12 }}>
          <MyText text={"Morning Senior Batch"} fontFamily="SEMIBOLD" />
          <MyText text={"29 Players"} fontFamily="REGULAR" color={Colors.gray2} />
        </View>
      </View>

      <AntDesign name="right" style={{ marginRight: 5 }} />
    </TouchableOpacity>
  );
};
