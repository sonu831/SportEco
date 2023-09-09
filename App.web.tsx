import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import Navigation from './src/screens/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {initializeStore} from './src/services/utils/axios';
import ErrorBoundary from './src/screens/ErrorBoundary';

const App = () => {
  initializeStore(store);
  //   const errorHandler = (error: Error, stackTrace: string) => {
  //     Sentry.Native.captureException(
  //       `Error Boundary error - ${error} stackTrace- ${stackTrace}`,
  //     );
  //   };

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider style={styles.container}>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
