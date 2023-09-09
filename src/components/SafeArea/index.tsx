import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../../constants/Colors";

type SafeAreaProps = {
  classNames?: StyleProp<ViewStyle>;
  children: ReactNode;
};

const SafeArea = ({ children, classNames }: SafeAreaProps) => {
  return (
    <SafeAreaView style={[styles.safeArea, classNames]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
