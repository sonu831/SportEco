import { View, Text } from "react-native";
import React from "react";
import { styles } from "./CreateBatchStyle";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";
const CreateBatch = () => {
  const [batchName, setBatchName] = React.useState("");
  const [batchDescription, setBatchDescription] = React.useState("")
  return (
    <View style={styles.container}>
      <Header
        title="Create Batch"
        hasActionIcon
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
      />
      <View style={styles.mainView}>
        <MyText text={"Enter Batch Details."} fontsize={24} fontFamily="BOLD" />
        <MyText text={"Give a unique name & description to this batch."} fontsize={13} fontFamily="REGULAR" color={Colors.gray2} />
        <View style={{ height: '12%' }} />
        <TextInput
          mode="outlined"
          label="Batch Name"
          placeholder="Morning Senior Batch"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={batchName}
          onChangeText={(text) => setBatchName(text)}
        />
        <View style={{ height: "10%" }} />
        <TextInput
          mode="outlined"
          label="Batch Description"
          placeholder="Tennis players of age group 8-12. Focus is on developing fundamental tennis skills, promoting teamwork, and fo..."
          value={batchDescription}
          multiline
          placeholderTextColor={"#000"}
          activeOutlineColor="grey"
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
          }}
          onChangeText={(text) => setBatchDescription(text)}
        />
      </View>
    </View>
  );
};

export default CreateBatch;
