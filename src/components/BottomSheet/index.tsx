import React from "react";
import {
    Modal,
    ModalProps,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./Styles";
import { Colors } from "../../constants/Colors";

export interface BottomSheetProps extends ModalProps {
    onClose(): void;
}

export function BottomSheet(props: BottomSheetProps) {

    const { visible, onClose, style: containerStyle, ...restProps } = props;

    return (
        <Modal
            visible={visible}
            transparent
            style={styles.container1}
            animationType="fade"
            {...restProps}>
            <TouchableWithoutFeedback
                onPress={() => {
                    onClose();
                }}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
}
