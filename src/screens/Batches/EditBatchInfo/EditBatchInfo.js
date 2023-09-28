import { View, Text } from "react-native";
import React from "react";
import { styles } from "./EditBatchInfoStyle";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
import MyButton from "../../../components/MyButton";
import MyText from "../../../components/MyText";
import { Colors } from "../../../constants/Colors";

const EditBatchInfo = ({ navigation }) => {
  const [batchName, setBatchName] = React.useState("Morning Senior Batch");
  const [batchDesc, setBatchDesc] = React.useState(
    "Tennis players of age group 8-12. Focus is on developing fundamental tennis skills, promoting teamwork, and fo..."
  );
  //function : nav func
  const gotoAddRemovePlayer = () => navigation.navigate("AddRemovePlayer");
  //UI
  return (
    <View style={styles.container}>
      <Header
        title="Edit Batch"
        hasActionIcon
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
      />
      <View style={styles.mainView}>
        <MyText text="Edit Batch Details." fontFamily="BOLD" fontsize={24} />
        <MyText text="Edit the name & description of this batch." fontFamily="REGULAR" />
        <View style={{ height: '12%' }} />
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
            backgroundColor: 'white',
            color: Colors.black2
          }}
          onChangeText={(text) => setBatchName(text)}
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
            backgroundColor: 'white',
            color: Colors.black2
          }}
          onChangeText={(text) => setBatchDesc(text)}
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
        />
      </View>
    </View>
  );
};

export default EditBatchInfo;
