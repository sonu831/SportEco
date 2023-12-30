import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TitleText } from "../../components";
import UserTypes from "../../components/UserTypes";

type Props = {
  updateState?: any;
}

const SelectUserTypes = ({ updateState }: Props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const userTypes = [
    {
      id: 1,
      name: "Coach",
      img: require("../../assets/images/coach.png"),
      width: "43%",
    },
    {
      id: 2,
      name: "Player",
      img: require("../../assets/images/player.png"),
      width: "43%",
    },
    {
      id: 3,
      name: "Parent",
      img: require("../../assets/images/parent.png"),
      width: "93%",
    },
  ];

  useEffect(() => {
    console.log(
      "selectedUsers.map((a: any) => a.name)",
      selectedUsers.map((a: any) => a.name)
    );
    updateState({
      key: "role",
      value: selectedUsers.map((a: any) => a.name),
    });
  }, [selectedUsers]);

  const toggleUserType = (user) => {
    setSelectedUsers((prevSelectedUsers) => {
      const index = prevSelectedUsers.findIndex((e) => e.id === user.id);

      if (index > -1) {
        // User is already selected, so remove them from the list
        const updatedUsers = prevSelectedUsers.filter((e) => e.id !== user.id);

        return updatedUsers;
      } else {
        // User is not selected, so add them to the list
        const updatedUsers = [...prevSelectedUsers, user];
        return updatedUsers;
      }
    });
  };

  return (
    <View style={styles.container}>
      <TitleText
        text={`Select Your Profiles.`}
        subtext="What defines you best? (Select all that apply)"
        style={styles.pb30}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          // backgroundColor: 'pink',
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
    paddingHorizontal: 13,
  },
  pb30: {
    paddingLeft: 15,
    paddingBottom: 35,
  },
});
