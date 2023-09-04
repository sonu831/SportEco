import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TitleText } from '../../components'
import UserTypes from '../../components/UserTypes';

const SelectUserTypes = ({ updateState }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const data = [
    {
      id: 1,
      name: "Coach",
      img: require('../../assets/images/coach.png'),
      isShow: false
    },
    {
      id: 2,
      name: "Player",
      img: require('../../assets/images/player.png'),
      isShow: false
    },
    {
      id: 3,
      name: "Parent",
      img: require('../../assets/images/parent.png'),
      isShow: false
    }
  ];
  const addUsers = (user) => {
    const index = selectedUsers.find((e) => e.id == user.id);
    if (index > -1) {
      const filter = selectedUsers.filter((e) => e.id != user.id);
      updateState({ key: "roles", values: filter })
      setSelectedUsers(filter);
      data[index].isShow = !user.isShow

    } else {
      updateState({ key: "roles", values: [...selectedUsers, user] })
      setSelectedUsers([...selectedUsers, user]);

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
        {data.map((item, index) => {
          const isSelected = selectedUsers.findIndex((e) => e.id == item.id);
          return (
            <UserTypes
              key={index.toString()}
              isCheck={item.isShow}
              width="43%"
              name={item.name}
              image={item.img}
              onPress={() => addUsers(item)}
            />
          );
        })}
      </View>
    </View>
  )
}

export default SelectUserTypes

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  pb30: {
    paddingBottom: 30
  },
})