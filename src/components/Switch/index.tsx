import React from "react";
import { Switch } from "react-native-switch";
import { Colors } from "../../constants/Colors";

type SwitchProps = {
  value: boolean | undefined;
  onChange: ((value: boolean) => void) | undefined;
};

const CustomSwitch = ({ value, onChange }: SwitchProps) => {
  return (
    <Switch
      onValueChange={onChange}
      value={value}
      renderActiveText={false}
      renderInActiveText={false}
      backgroundActive={Colors.gray1}
      backgroundInactive={Colors.gray1}
      circleActiveColor={Colors.toggleHead}
      circleInActiveColor={Colors.white}
      changeValueImmediately={true}
      circleBorderWidth={1}
      circleBorderInactiveColor={Colors.gray}
      circleBorderActiveColor={Colors.toggleHead}
      switchWidthMultiplier={2}
    />
  );
};

export default CustomSwitch;
