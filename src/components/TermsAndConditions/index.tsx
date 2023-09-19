import React from 'react';
import { View, Text } from 'react-native';
import MyText from '../MyText';
import { styles } from './styles';

export const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <MyText style={styles.content} text={`By continuing, you agree to our`} fontFamily='LIGHT' />
      <View style={{ flexDirection: 'row' }}>
        <MyText style={styles.underline} text={"Terms of Service,"} fontFamily='LIGHT' />
        <MyText style={styles.underline} text={"Privacy Policy,"} fontFamily='LIGHT' />
        <MyText style={styles.underline} text={"Content Policy"} fontFamily='LIGHT' />
      </View>
    </View>
  );
};
