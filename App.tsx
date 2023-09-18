import React, { useCallback } from "react";
import * as Sentry from "sentry-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Navigation from "./src/screens/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { initializeStore } from "./src/services/utils/axios";

Sentry.init({
  dsn: "https://49ddde955e544dbfb13a2d3b4a6ccbd6@o4504739695689728.ingest.sentry.io/4504739706699776",
  enableInExpoDevelopment: false,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

import ErrorBoundary from "./src/screens/ErrorBoundary";
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoaded] = useFonts({
    "mrt-black": require("./src/assets/fonts/WorkSans-Black.ttf"),
    "mrt-bold": require("./src/assets/fonts/WorkSans-Bold.ttf"),
    "mrt-xbold": require("./src/assets/fonts/WorkSans-ExtraBold.ttf"),
    "mrt-xlight": require("./src/assets/fonts/WorkSans-ExtraLight.ttf"),
    "mrt-light": require("./src/assets/fonts/WorkSans-Light.ttf"),
    "mrt-mid": require("./src/assets/fonts/WorkSans-Medium.ttf"),
    "mrt-reg": require("./src/assets/fonts/WorkSans-Regular.ttf"),
    "mrt-semibold": require("./src/assets/fonts/WorkSans-SemiBold.ttf"),
    "mrt-thin": require("./src/assets/fonts/WorkSans-Thin.ttf"),
  });
  initializeStore(store);
  const errorHandler = (error: Error, stackTrace: string) => {
    Sentry.Native.captureException(
      `Error Boundary error - ${error} stackTrace- ${stackTrace}`
    );
  };
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider style={styles.container} onLayout={handleOnLayout}>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default App;
