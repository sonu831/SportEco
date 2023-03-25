import { StyleSheet } from "react-native";
import Layout from "../../../constants/Layout";

const { window } = Layout;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f00",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#00f",
    padding: 10,
    borderRadius: 5,
  },
  stackButton: {
    backgroundColor: "#f493",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
