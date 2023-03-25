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
  currentImage: any;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  currentImage,
  icon,
  handleImage,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { pickImage } = useImagePicker({ handleImage });

  const handleSelectImage = () => {
    setShowModal(!showModal);
  };

  const handleImageRemove = () => {
    handleImage("");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectImage}>
        {!!currentImage ? (
          <Image source={{ uri: currentImage }} style={styles.image} />
        ) : (
          <Image source={icon || userProfile} />
        )}
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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
