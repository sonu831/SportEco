import { Alert } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

interface UseImagePickerProps {
  handleImage?: (uri: string) => void;
}

const useImagePicker = ({ handleImage }: UseImagePickerProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const pickImage = async (type: "camera" | "library") => {
    let result = null;
    const permission =
      type === "camera" ? Permissions.CAMERA : Permissions.MEDIA_LIBRARY;
    const { status } = await Permissions.askAsync(permission);
    if (status !== "granted") {
      Alert.alert(`${permission} permission not granted`);
      return;
    }

    if (type === "camera") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
      });
    }

    if (!!result?.assets?.length) {
      handleImage?.(result.assets[0].uri);
      setShowModal(false);
    }
  };

  return {
    showModal,
    setShowModal,
    pickImage,
  };
};

export default useImagePicker;
