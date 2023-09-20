import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  countryFlagContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainer: {
    marginLeft: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "62%",
    paddingLeft: 10,
  },
  inputContainerEditProfile: {
    marginLeft: 2,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    width: "76%",
  },
  phoneNumberInput: {
    flex: 1,
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  countryCodeContainer: {
    justifyContent: "center",
    marginRight: 5,
  },
  countryCodeText: {
    fontSize: 16,
    marginLeft: 5,
  },
});
