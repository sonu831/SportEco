import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../constants/Colors'

const UserTypes = ({
  name,
  isCheck = false,
  width = '30%',
  image,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
        style={[ styles.card, { width: width, borderColor: isCheck ? Colors.orange : Colors.black} ]}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={image} style={{ width: 50, height: 50 }} />
        <Text>{name}</Text>
      </View>
      <Icon
        style={{position: 'absolute', top: 10, right: 10}}
          name={isCheck ? 'check-square' : 'square'}
          size={20}
          color={isCheck ? Colors.orange : Colors.black}
        />

    </TouchableOpacity>
  );
};

export default UserTypes;

const styles = StyleSheet.create({
    card: {
        height: 160,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 0,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
      }
})