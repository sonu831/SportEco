import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Header from "../../components/MyHeader";
import FAB from "../../components/FAB";
import SearchBox from "../../components/SearchBox";
import MyText from "../../components/MyText";
import BatchCard from "../../components/BatchCard";
import useBatches from "./useBatches";
import { styles } from "./styles";
import { Colors } from "../../constants/Colors";
import manageImg from "../../assets/images/manage_2.png";

const Batches = ({ navigation, route }) => {
  const {
    state: { batchList: batchData },
    debouncedOnChangeSearchBar,
    gotoCreateBatch,
    gotoBatchInfo,
  } = useBatches({ navigation, route });

  const renderBatch = ({ item, index }) => (
    <BatchCard
      bathName={item?.batch_name}
      batchSubData={item?.players.length}
      bacthIndex={index}
      onPress={() => gotoBatchInfo(item)}
    />
  );

  const renderEmptyList = () => (
    <View style={styles.dataNoFoundStyle}>
      <Image source={manageImg} />
      <Text style={styles.noBatchesText}>No Batches Found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Manage" />
      <View style={styles.mainView}>
        <MyText text="Batches." fontFamily="BOLD" fontsize={25} />
        <MyText
          text="List of all your batches."
          fontFamily="SEMIBOLD"
          fontsize={14}
          color={Colors.gray}
        />
        <SearchBox onChange={debouncedOnChangeSearchBar} />
        <FlatList
          data={batchData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderBatch}
          ListEmptyComponent={renderEmptyList}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      <FAB onPress={gotoCreateBatch} />
    </View>
  );
};

export default Batches;
