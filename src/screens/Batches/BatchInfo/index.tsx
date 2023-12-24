import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "../../../components/MyHeader";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FAB from "../../../components/FAB/index";
import SearchBox from "../../../components/SearchBox";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";
import { useBatchInfo } from "./useBatchInfo";

const BatchInfo = ({ navigation }) => {
  const { gotoEditBatchInfo, goToAddRemovePlayer, batchDetails } =
    useBatchInfo();
  return (
    <View style={styles.container}>
      <Header
        hasActionIcon
        actionBtnPress={gotoEditBatchInfo}
        ActionIcon={<Feather name="edit" size={18} color={"#fff"} />}
      />
      <View style={styles.mainView}>
        <MyText
          text={batchDetails?.batch_name}
          fontsize={24}
          fontFamily="BOLD"
        />
        <MyText
          text={batchDetails?.description}
          fontsize={13}
          fontFamily="REGULAR"
          color={Colors.gray2}
        />
        {batchDetails?.players?.length > 0 ? (
          <View>
            <SearchBox />
            {batchDetails?.players?.map((item, index) => {
              return (
                <BatchMemberCard
                  key={index}
                  batchMemberInfo={item}
                  batchMemberIndex={index}
                />
              );
            })}
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
              No Player Found
            </Text>
          </View>
        )}
      </View>
      <FAB onPress={() => goToAddRemovePlayer(batchDetails)} />
    </View>
  );
};

export default BatchInfo;

const BatchMemberCard = ({ batchMemberInfo, batchMemberIndex }) => {
  return (
    <TouchableOpacity
      key={batchMemberIndex}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
        borderColor: Colors.gray,
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
          text={batchMemberInfo?.name}
          fontsize={16}
          fontFamily="MEDIUM"
          style={{ marginLeft: 12 }}
        />
      </View>
      <AntDesign name="right" size={16} style={{ marginRight: 5 }} />
    </TouchableOpacity>
  );
};
