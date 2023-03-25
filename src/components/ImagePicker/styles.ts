import { StyleSheet } from "react-native";

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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
