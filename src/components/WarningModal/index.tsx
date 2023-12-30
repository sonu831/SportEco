import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { Colors } from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WarningModal = ({ isVisible, onClose, onDelete, message }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    onClose();
                }}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.warningConttainer}>
                        <View style={styles.row}>
                            <AntDesign name="exclamationcircleo" style={{ marginRight: 12 }} size={25} color={'#F1592A'} />
                            <Text style={styles.warningText}>Warning</Text>
                        </View>
                        <TouchableHighlight
                            underlayColor={Colors.gray}
                            style={styles.closeIconContainer}
                            onPress={() => onClose()}>
                            <AntDesign name="close" size={22} />
                        </TouchableHighlight>
                    </View>
                    {message}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.cancelBgColor}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onDelete} style={styles.deleteBgColor}>
                            <Text style={styles.deleteButton}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 30,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    deleteButton: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 18,
        paddingHorizontal: 30,
        paddingVertical: 15,
        textAlign: 'center'
    },
    cancelButton: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 18,
        paddingHorizontal: 30,
        paddingVertical: 15,
        textAlign: 'center'
    },
    deleteBgColor: {
        backgroundColor: '#F1592A',
        borderRadius: 8,
        width: '44%'
    },
    cancelBgColor: {
        backgroundColor: '#303030',
        borderRadius: 8,
        width: '44%'
    },
    container1: {
        position: "absolute",
        flexGrow: 1,
        alignSelf: "stretch",
    },
    modalContainer: {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 22,
        alignSelf: "stretch",
        flexGrow: 1,
        flexDirection: "column",
        paddingHorizontal: 12,
    },
    modalOverlay: {
        flex: 1,
        alignContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    closeIconContainer: {
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0,
    },
    warningConttainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        marginTop: 8,
        marginHorizontal: 12
    },
    warningText: {
        fontSize: 22,
        fontWeight: '600'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default WarningModal;
