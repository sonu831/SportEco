import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  countryFlagContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainer: {
    marginLeft: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    width: "70%",
  },
  inputContainerEditProfile: {
    marginLeft: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    width: "80%",
  },
  phoneNumberInput: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  countryCodeContainer: {
    justifyContent: "center",
    marginRight: 5,
  },
  countryCodeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
