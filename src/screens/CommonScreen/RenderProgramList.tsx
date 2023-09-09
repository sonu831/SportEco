// @ts-ignore
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import programIcon from "../../assets/images/clock-large.png";

const RenderProgramList = ({
  data,
  handleClick,
}: {
  data: any[];
  handleClick: any;
}) => {
  return (
    <View style={[styles.playerListContainer]}>
      {data?.map((program: any, programIndex) => (
        <TouchableOpacity
          key={programIndex}
          style={[
            styles.playerListItem,
            programIndex !== data.length - 1 && styles.pb60,
          ]}
          onPress={() => handleClick(program)}
        >
          <Image source={programIcon} style={styles.programIcon} />
          <Text style={styles.playerName}>{program?.program_name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RenderProgramList;
