import React from "react";
import { View } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
import Header from "../../../components/MyHeader";
import MyText from "../../../components/MyText";
import { useCreateBatch } from "./useCreateBatch"; // Ensure this path is correct
import { Colors } from "../../../constants/Colors";

const CreateBatch = ({ navigation }) => {
  const {
    batchName,
    setBatchName,
    batchDescription,
    setBatchDescription,
    handleCreateBatch,
  } = useCreateBatch();

  return (
    <View style={styles.container}>
      <Header
        title="Create Batch"
        hasActionIcon
        actionBtnPress={handleCreateBatch}
        ActionIcon={<AntDesign name="check" size={18} color="#fff" />}
        isActionBtnDisabled={!batchName || !batchDescription}
      />
      <View style={styles.mainView}>
        <MyText text="Enter Batch Details." fontsize={24} fontFamily="BOLD" />
        <MyText
          text="Give a unique name & description to this batch."
          fontsize={13}
          fontFamily="REGULAR"
          color={Colors.gray2}
        />
        <View style={{ height: "12%" }} />
        <TextInput
          mode="outlined"
          label="Batch Name"
          placeholder="Enter Batch Name"
          activeOutlineColor="grey"
          placeholderTextColor="#000"
          value={batchName}
          onChangeText={setBatchName}
          style={styles.input}
        />
        <View style={{ height: "10%" }} />
        <TextInput
          mode="outlined"
          label="Enter Batch Description"
          placeholder="Enter Batch Description"
          value={batchDescription}
          multiline
          placeholderTextColor="#000"
          activeOutlineColor="grey"
          style={styles.input}
          onChangeText={setBatchDescription}
        />
      </View>
    </View>
  );
};

export default CreateBatch;
