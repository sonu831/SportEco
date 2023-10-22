import React, { useState } from "react";
import {
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import userProfile from "../../assets/images/user-profile.png";
import useImagePicker from "./useImagePicker";
import { styles } from "./styles";

interface ImagePickerProps {
  icon?: ImageSourcePropType;
  handleImage: any;
  currentImage?: any;
  isChooseAvatar?: boolean;
  showAvatar?: any;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  currentImage,
  icon,
  handleImage,
  isChooseAvatar = false,
  showAvatar = () => {},
}) => {
  const { pickImage, setShowModal, showModal } = useImagePicker({
    handleImage,
  });

  const handleSelectImage = () => {
    setShowModal(!showModal);
  };

  const handleImageRemove = () => {
    handleImage("");
  };

  const renderImagePlaceholder = () => {
    if (currentImage) {
      return <Image source={{ uri: currentImage }} style={styles.image} />;
    } else if (isChooseAvatar) {
      return (
        <View style={styles.uploadPhoto}>
          <Text style={[styles.uploadPhoto1, styles.uploadPhoto1Typo]}>
            Upload Photo
          </Text>
        </View>
      );
    }
    return <Image source={icon || userProfile} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectImage}>
        {renderImagePlaceholder()}
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {showAvatar && (
              <TouchableOpacity style={styles.modalButton} onPress={showAvatar}>
                <Text style={styles.modalButtonText}>Change Avatar</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage("camera")}
            >
              <Text style={styles.modalButtonText}>Take a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage("library")}
            >
              <Text style={styles.modalButtonText}>Choose from Library</Text>
            </TouchableOpacity>
            {!!currentImage && (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleImageRemove}
              >
                <Text style={styles.modalButtonText}>Remove Image</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImagePicker;
