import React, { useEffect } from "react";
import { View, Image } from "react-native";
import logo from "../../assets/images/logo.png";
import { styles } from "./styles";

const LandingScreen = (props: any) => {
  useEffect(() => {
    const landingTimer = setTimeout(() => {
      props.navigation.navigate("Loading"); // Navigate to the Loading screen after 3 seconds
    }, 10);

    // Clean up the landing timer if the component unmounts before the timer completes
    return () => {
      clearTimeout(landingTimer);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default LandingScreen;
