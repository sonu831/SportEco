import React, { useEffect } from "react";
import { View, Image } from "react-native";
import loading from "../../assets/images/loading-bg.png";
import { styles } from "../LandingScreen/styles";

const Loading = (props: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate("Verification");
    }, 2000); // 3000 milliseconds = 3 seconds

    // Clean up the timer if the component unmounts before the timer completes
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <Image source={loading} style={styles.logo} />
    </View>
  );
};

export default Loading;
