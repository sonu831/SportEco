import {
    View,
    Text,
    TouchableOpacity,
    ColorValue,
    DimensionValue,
} from "react-native";
import React, { useCallback } from "react";
interface buttonProps {
    title: string;
    height: DimensionValue;
    backgroundColor: ColorValue;
    width: DimensionValue;
    marginVertical: DimensionValue;
    onPress: void;
    alignSelf:
    | "auto"
    | "center"
    | "baseline"
    | "flex-end"
    | "flex-start"
    | "stretch";
}
const MyButton: React.FC<buttonProps> = ({
    title,
    height = 50,
    backgroundColor = "#F1592A",
    width = "100%",
    marginVertical = 10,
    alignSelf = "auto",
    onPress = () => { },
}) => {
    const handlePress = useCallback(() => {
        onPress();
    }, [onPress]);
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                height: height,
                width: width,
                backgroundColor: backgroundColor,
                marginVertical: marginVertical,
                alignSelf: alignSelf,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MyButton;
