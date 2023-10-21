import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import Header from "../../../components/MyHeader";
import { styles } from "./BatchesStyle";
import FAB from "../../../components/FAB";
import SearchBox from "../../../components/SearchBox";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";
import useBatches from "../useBatches";
import BatchCard from "../../../components/BatchCard";

const Batches = ({ navigation, route }) => {
  const { state: { batchList: batchData }, onChangeSearchBar } = useBatches({ navigation, route }); // var
  const gotoCreateBatch = () => navigation.navigate("CreateBatch"); // var
  const gotoBatchInfo = (item) => navigation.navigate("BatchInfo", { batchInfo: item }); // var
  //UI
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <MyText text="Batches." fontFamily="BOLD" fontsize={25} />
        <MyText text="List of all your batches." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
        <SearchBox onChange={onChangeSearchBar} />
        {batchData && batchData.length > 0 ? (
          <FlatList
            data={batchData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <BatchCard
                  bathName={item?.batch_name}
                  batchSubData={item?.players.length}
                  bacthIndex={index}
                  onPress={() => gotoBatchInfo(item)}
                />
              )
            }}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        ) : (
          <View
            style={styles.dataNoFoundStyle}
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