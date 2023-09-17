import { TouchableOpacity } from "react-native";
import React from "react";
// packages
import Feather from "react-native-vector-icons/Feather";

const FAB = ({
    Icon = <Feather name="plus" color={"#fff"} size={24} />,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                position: "absolute",
                bottom: 40,
                right: 20,
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F1592A",
                borderRadius: 100,
            }}
        >
            {Icon}
        </TouchableOpacity>
    );
};

export default FAB;
