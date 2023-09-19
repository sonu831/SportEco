import { View, Text } from "react-native";
import React from "react";
import { styles } from "./CreateBatchStyle";
import Header from "../../../components/MyHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
const CreateBatch = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Header
        title="Create Batch"
        hasActionIcon
        ActionIcon={<AntDesign name="check" size={18} color={"#fff"} />}
      />
      <View style={styles.mainView}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Enter Batch Details.
        </Text>
        <Text style={{ marginVertical: 10 }}>
          Give a unique name & description to this batch.
        </Text>
        <TextInput
          mode="outlined"
          label="Batch Name"
          placeholder="Morning Senior Batch"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <View style={{ height: "10%" }} />
        <TextInput
          mode="outlined"
          label="Batch Description"
          placeholder="Tennis players of age group 8-12. Focus is on developing fundamental tennis skills, promoting teamwork, and fo..."
          value={text}
          multiline
          placeholderTextColor={"#000"}
          activeOutlineColor="grey"
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
          }}
          onChangeText={(text) => setText(text)}
        />
      </View>
    </View>
  );
};

export default CreateBatch;
