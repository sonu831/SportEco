import { View, Text } from "react-native";
import React from "react";
import { styles } from "./CreateBatchStyle";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addBatch } from "../../../services/batches";

const CreateBatch = ({ navigation }) => {
  const goToBacthesScreen = () => navigation.navigate("Batches");
  const [batchName, setBatchName] = React.useState(""); // useState
  const [batchDescription, setBatchDescription] = React.useState("")
  const dispatch = useDispatch<AppDispatch>();
  const handleCreateBatch = () => {
    const request = {
      batch_name: batchName,
      batch_desc: batchDescription
    };
    dispatch(addBatch(request)).then((res) => {
      // const resData = res.payload?.data;
      setBatchName("")
      setBatchDescription("")
      goToBacthesScreen();
    });
  }
  return (
    <View style={styles.container}>
      <Header
        title="Create Batch"
        hasActionIcon
        actionBtnPress={handleCreateBatch}
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
        isActionBtnDisabled={!batchName || !batchDescription}
      />
      <View style={styles.mainView}>
        <MyText text={"Enter Batch Details."} fontsize={24} fontFamily="BOLD" />
        <MyText text={"Give a unique name & description to this batch."} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
        <View style={{ height: '12%' }} />
        <TextInput
          mode="outlined"
          label="Batch Name"
          placeholder="Enter Batch Name"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={batchName}
          onChangeText={(text) => setBatchName(text)}
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: 'white',
            color: Colors.black2
          }}
        />
        <View style={{ height: "10%" }} />
        <TextInput
          mode="outlined"
          label="Enter Batch Description"
          placeholder="Enter Batch Description"
          value={batchDescription}
          multiline
          placeholderTextColor={"#000"}
          activeOutlineColor="grey"
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: 'white',
            color: Colors.black2
          }}
          onChangeText={(text) => setBatchDescription(text)}
        />
      </View>
    </View>
  );
};

export default CreateBatch;
