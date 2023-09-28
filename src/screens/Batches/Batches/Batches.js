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
  const { state: { batchList: batchData } } = useBatches({ navigation, route }); // var
  console.log("state", route);
  const gotoCreateBatch = () => navigation.navigate("CreateBatch"); // var
  const gotoBatchInfo = (item) => navigation.navigate("BatchInfo", { batchInfo: item }); // var
  //UI
  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <MyText text="Batches." fontFamily="BOLD" fontsize={25} />
        <MyText text="List of all your batches." fontFamily="SEMIBOLD" fontsize={14} color={Colors.gray} />
        {batchData.length > 0 ? (
          <View>
            <SearchBox />
            <FlatList
              data={batchData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <BatchCard
                    bacthItem={item}
                    bacthIndex={index}
                    onPress={() => gotoBatchInfo(item)}
                  />
                )
              }}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ flexGrow: 1 }}
            />
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