import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const TermsAndConditions = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          {`By continuing, you agree to our`}
        </Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.underline}>Terms of Service,</Text>
        <Text style={styles.underline}>Privacy Policy,</Text>
        <Text style={styles.underline}>Content Policy</Text>
        </View>
      </View>
    );
  };
  