import React from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import uploadIcon from "../../assets/images/upload.png";
import useFilePicker from "./useFilePicker";

const FilePicker = ({
  icon,
  handleUpload,
}: {
  icon?: ImageSourcePropType | undefined;
  handleUpload: Function;
}) => {
  const { pickDocument } = useFilePicker({ handleUpload });

  return (
    <TouchableOpacity onPress={pickDocument}>
      <Image source={icon || uploadIcon} />
    </TouchableOpacity>
  );
};

export default FilePicker;
