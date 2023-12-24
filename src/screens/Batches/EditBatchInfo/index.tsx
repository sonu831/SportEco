import React from "react";
import { View } from "react-native";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
import MyButton from "../../../components/MyButton";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";
import styles from "./styles";
import { useEditBatchInfo } from "./useEditBatchInfo";

const EditBatchInfo = () => {
  const {
    batchName,
    setBatchName,
    batchDesc,
    setBatchDesc,
    gotoAddRemovePlayer,
    handleDeleteBatch,
    handleUpdateBatch,
  } = useEditBatchInfo();

  //UI
  return (
    <View style={styles.container}>
      <Header
        title="Edit Batch"
        hasActionIcon
        actionBtnPress={handleUpdateBatch}
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
      />
      <View style={styles.mainView}>
        <MyText text="Edit Batch Details." fontFamily="BOLD" fontsize={24} />
        <MyText
          text="Edit the name & description of this batch."
          fontFamily="REGULAR"
        />
        <View style={{ height: "12%" }} />
        <TextInput
          mode="outlined"
          label="Batch Name"
          placeholder="Morning Senior Batch"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={batchName}
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: "white",
            color: Colors.black2,
          }}
          onChangeText={setBatchName}
        />
        <View style={{ height: "10%" }} />
        <TextInput
          mode="outlined"
          label="Batch Description"
          placeholder="Tennis players of age group 8-12. Focus is on developing fundamental tennis skills, promoting teamwork, and fo..."
          value={batchDesc}
          multiline
          placeholderTextColor={"#000"}
          activeOutlineColor="grey"
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: "white",
            color: Colors.black2,
          }}
          onChangeText={setBatchDesc}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <MyButton
          width={"90%"}
          alignSelf="center"
          title="Add/Remove Players"
          onPress={gotoAddRemovePlayer}
        />
        <MyButton
          title="Delete Batch"
          width={"90%"}
          alignSelf="center"
          backgroundColor={"#303030"}
          onPress={handleDeleteBatch}
        />
      </View>
    </View>
  );
};

export default EditBatchInfo;
