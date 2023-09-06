import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TitleText } from '../../components'
import UserTypes from '../../components/UserTypes';

const SelectUserTypes = ({ updateState }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const userTypes = [
    {
      id: 1,
      name: "Coach",
      img: require('../../assets/images/coach.png'),
      width: '43%'
    },
    {
      id: 2,
      name: "Player",
      img: require('../../assets/images/player.png'),
      width: '43%'
    },
    {
      id: 3,
      name: "Parent",
      img: require('../../assets/images/parent.png'),
      width: '93%'
    },
  ];

  const toggleUserType = (user) => {
    const index = selectedUsers.findIndex((e) => e.id === user.id);
    if (index > -1) {
      const updatedUsers = selectedUsers.filter((e) => e.id !== user.id);
      updateState({ key: "roles", values: updatedUsers });
      setSelectedUsers(updatedUsers);
    } else {
      const updatedUsers = [...selectedUsers, user];
      updateState({ key: "roles", values: updatedUsers });
      setSelectedUsers(updatedUsers);
    }
  };

  return (
    <View style={styles.container}>
      <TitleText
        text={`Select Your Profiles!.`}
        subtext="What defines you best? (Select all that apply)"
        style={styles.pb30}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {userTypes.map((item) => (
          <UserTypes
            key={item.id.toString()}
            isCheck={selectedUsers.some((user) => user.id === item.id)}
            width={item.width}
            name={item.name}
            image={item.img}
            onPress={() => toggleUserType(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default SelectUserTypes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  pb30: {
    paddingBottom: 30
  },
})