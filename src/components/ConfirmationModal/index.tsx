import React, { ReactNode, useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  NativeSyntheticEvent,
} from "react-native";
import { styles } from "./styles";

type ConfirmationProps = {
  open?: boolean | undefined;
  onHide?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  children?: ReactNode;
};

const ConfirmationModal = ({ open, onHide, children }: ConfirmationProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={onHide}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
