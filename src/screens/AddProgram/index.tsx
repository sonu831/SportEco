import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Colors } from "../../constants/Colors";
import deleteIcon from "../../assets/images/delete.png";
import { styles } from "./styles";
import TextField from "../../components/TextField";
import useAddProgram from "./useAddProgram";
import { RootStackScreenProps } from "../Navigation/types";
import { SessionDefinition } from "../../types/session";
import SafeArea from "../../components/SafeArea";

const AddProgram = ({
  navigation,
  route,
}: RootStackScreenProps<"AddProgram">) => {
  const {
    state,
    updateState,
    handleGoBack,
    sessions,
    handleDeleteSession,
    handleSave,
  } = useAddProgram({
    navigation,
    route,
  });

  const { programName = "", description = "" } = state;

  return (
    <SafeArea classNames={styles.safeView}>
      <ScrollView>
        <View style={[styles.containerView, styles.flex]}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
          </TouchableOpacity>
          <View style={styles.mxAuto}>
            <Text style={styles.headingText}>Program</Text>
          </View>
        </View>
        <View style={[styles.containerView, styles.m42]}>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>Program Name</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <TextField
              value={programName}
              onChangeText={(programName) =>
                updateState({
                  key: "programName",
                  value: programName,
                })
              }
              classNames={styles.w195}
            />
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <Text style={styles.fieldRowLabel}>Description</Text>
            <TextField
              value={description}
              onChangeText={(newDesc) =>
                updateState({
                  key: "description",
                  value: newDesc,
                })
              }
              classNames={[styles.w195, styles.h104]}
              isMultiline={true}
            />
          </View>
          <View style={[styles.alignCenter, styles.m42]}>
            <TouchableOpacity
              style={styles.addPlayerBtn}
              onPress={() => navigation.navigate("AddSession")}
            >
              <Text style={styles.addPlayerBtnText}>Add Sessions</Text>
              <Entypo name="circle-with-plus" size={12} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View style={[styles.m42, styles.minH200]}>
            {sessions.map((session: SessionDefinition, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.listItem,
                    i !== sessions.length - 1 && styles.mb30,
                  ]}
                >
                  {/* <Image source={dummyUserIcon} style={styles.playerImage} /> */}
                  <Text style={styles.listItemText}>
                    {session.name || session.sesionname}
                  </Text>
                  <TouchableOpacity
                    style={[styles.mlAuto, styles.mr30]}
                    onPress={() => handleDeleteSession(session.id)}
                  >
                    <Image source={deleteIcon} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View style={[styles.alignCenter, styles.mv20]}>
            <TouchableOpacity
              style={[
                styles.saveBtn,

                // selectedPlayers.length === 0 && styles.opacity50,
              ]}
              onPress={handleSave}
              //   disabled={selectedPlayers.length === 0}
            >
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default AddProgram;
