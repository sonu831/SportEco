import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { FontFamily, FontSize } from "../../assets/fonts/fonts";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#CCCCCC",
  },
  uploadedImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modalButtonText: {
    fontSize: 17,
    color: Colors.gray2,
    fontWeight: '500',
  },
  uploadPhoto: {
    borderRadius: 24,
    backgroundColor: Colors.darkslategray,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: "center",
  },
  uploadPhoto1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  uploadPhoto1: {
    color: Colors.white,
  },
  modalOverlay: {
    flex: 1,
    alignContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  seperator: {
    borderBottomWidth: 1, 
    borderBottomColor: Colors.gray3, 
    width: '99%', 
    marginBottom: 8
  }
});
