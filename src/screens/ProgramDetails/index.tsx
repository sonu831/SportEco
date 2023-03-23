import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { Text, View, Pressable, Image, ScrollView } from "react-native";
import { Colors } from "../../constants/Colors";
import { styles } from "./styles";
import useProgramDetails from "./useProgramDetails";
import { RootStackScreenProps } from "../Navigation/types";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import SafeArea from "../../components/SafeArea";
import badmintonIcon from "../../assets/images/badminton.png";
import ConfirmationModal from "../../components/ConfirmationModal";

const ProgramDetails = ({
  navigation,
  route,
}: RootStackScreenProps<"ProgramDetails">) => {
  const {
    handleGoBack,
    programDetails,
    handleDeleteProgram,
    state,
    updateState,
  } = useProgramDetails({
    navigation,
    route,
  });

  const { showConfirmation } = state;

  const sessions = programDetails?.sessions;

  return (
    <SafeArea classNames={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <View style={styles.flexDirRow}>
            <Pressable style={styles.backButton} onPress={handleGoBack}>
              <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
            </Pressable>
            <Text style={styles.username}>{programDetails?.program_name}</Text>
          </View>
          <View style={[styles.headerContainer, styles.py16]}>
            <View style={styles.flexRow}>
              <Button
                label="Edit Program"
                icon="chevron-right"
                onPress={() =>
                  navigation.navigate("AddProgram", {
                    isEdit: true,
                  })
                }
              />
              <Button
                type="cancel"
                label="Delete Program"
                icon="chevron-right"
                iconColor={Colors.orange}
                onPress={() =>
                  updateState({
                    key: "showConfirmation",
                    value: !showConfirmation,
                  })
                }
                style={styles.ml10}
              />
            </View>
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <View style={styles.flex}>
              <Text style={styles.fieldRowLabel}>Program Name</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <TextField
              value={programDetails?.program_name}
              isEditable={false}
              classNames={styles.w195}
            />
          </View>
          <View style={[styles.fieldRow, styles.py16]}>
            <Text style={styles.fieldRowLabel}>Description</Text>
            <TextField
              value={programDetails?.description}
              classNames={[styles.w195, styles.h104]}
              isMultiline={true}
              isEditable={false}
            />
          </View>
          <View style={styles.playerListContainer}>
            {Array.isArray(sessions) &&
              sessions?.length > 0 &&
              sessions.map((session, sessionIndex) => (
                <View
                  style={[
                    styles.playerListItem,
                    sessionIndex !== sessions.length - 1 && styles.pb60,
                  ]}
                  key={sessionIndex}
                >
                  <Image source={badmintonIcon} style={styles.playerAvatar} />
                  <Text style={styles.playerName}>{session?.sesionname}</Text>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>

      <ConfirmationModal
        open={showConfirmation}
        onHide={() =>
          updateState({
            key: "showConfirmation",
            value: !showConfirmation,
          })
        }
      >
        <View>
          <Text>Are you sure want to delete?</Text>
          <View style={styles.flexRow}>
            <Button
              label="Cancel"
              type="cancel"
              onPress={() =>
                updateState({
                  key: "showConfirmation",
                  value: !showConfirmation,
                })
              }
            />
            <Button
              label="Delete"
              onPress={handleDeleteProgram}
              style={styles.ml10}
            />
          </View>
        </View>
      </ConfirmationModal>
    </SafeArea>
  );
};

export default ProgramDetails;
