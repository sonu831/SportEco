import React from "react";
import {
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import useImagePicker from "./useImagePicker";
import { styles } from "./styles";
import { BottomSheet } from "../BottomSheet";

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
  showAvatar = () => { },
}) => {
  const { pickImage, setShowModal, showModal } = useImagePicker({
    handleImage,
  });

  const userProfile = require("../../assets/images/user-profile.png");

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
      {showModal && <BottomSheet onClose={() => setShowModal(false)}>
        {showAvatar && (
          <View>
            <TouchableOpacity style={styles.modalButton} onPress={showAvatar}>
              <Text style={styles.modalButtonText}>Change Avatar</Text>
            </TouchableOpacity>
            <View style={styles.seperator}></View>
          </View>
        )}
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => pickImage("library")}
        >
          <Text style={styles.modalButtonText}>Upload From Gallery</Text>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => pickImage("camera")}
        >
          <Text style={styles.modalButtonText}>Take Photo</Text>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
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
          <Text style={[styles.modalButtonText, { color: '#EB5757' }]}>Cancel</Text>
        </TouchableOpacity>
      </BottomSheet>}
    </View>
  );
};

export default ImagePicker;
