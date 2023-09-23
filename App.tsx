import React, { useCallback, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Navigation from "./src/screens/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { initializeStore } from "./src/services/utils/axios";
import * as Updates from "expo-updates";

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
    // Sentry.Native.captureException(
    //   `Error Boundary error - ${error} stackTrace- ${stackTrace}`
    // );
  };

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    // Check if the environment is production before running this effect
    if (process.env.NODE_ENV === "production") {
      const updateInterval = setInterval(() => {
        onFetchUpdateAsync();
      }, 8000);

      return () => {
        clearInterval(updateInterval);
      };
    }
  }, []);

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
