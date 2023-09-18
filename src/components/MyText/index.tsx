import { View, Text, StyleSheet, ColorValue } from "react-native";
import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "../../constants";
interface textProps {
    text: string;
    fontsize?: number;
    fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "normal";
    color?: ColorValue;
    style?: any;
    fontFamily?:
    | "BLACK"
    | "BOLD"
    | "EXTRA_BOLD"
    | "EXTRA_LIGHT"
    | "LIGHT"
    | "MEDIUM"
    | "REGULAR"
    | "SEMIBOLD"
    | "THIN";
}
const MyText: React.FC<textProps> = ({
    text,
    fontsize = 14,
    fontWeight,
    color,
    style,
    fontFamily = "REGULAR",
}) => {
    const getFontFamily = (): string => {
        const propsFontFamilies: string[] = [
            "BLACK",
            "BOLD",
            "EXTRA_BOLD",
            "EXTRA_LIGHT",
            "LIGHT",
            "MEDIUM",
            "REGULAR",
            "SEMIBOLD",
            "THIN",
        ];
        const fontFamilies: string[] = Object.values(Fonts);
        const index: number = propsFontFamilies.findIndex(
            (item) => item === fontFamily
        );
        if (index > -1) return fontFamilies[index];
        return fontFamily;
    };
    const styles = StyleSheet.create({
        textStyle: {
            fontSize: RFValue(fontsize),
            fontWeight: fontWeight,
            color: color,
            fontFamily: getFontFamily(),
        },
    });
    return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

export default MyText;
