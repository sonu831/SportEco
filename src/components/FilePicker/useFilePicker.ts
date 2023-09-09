import React from "react";
import * as DocumentPicker from "expo-document-picker";

type UseFilePickerProps = {
  type?: string | string[] | undefined;
  handleUpload: Function;
};

const useFilePicker = ({ type = "*/*", handleUpload }: UseFilePickerProps) => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: type,
    });

    handleUpload(result);
  };

  return {
    pickDocument,
  };
};

export default useFilePicker;
