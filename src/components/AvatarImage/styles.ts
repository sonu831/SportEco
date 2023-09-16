import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatarContainer: {
    margin: 4,
    borderRadius: 24, // Half of width and height for a perfect circle
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export default styles;
