import { ImageSourcePropType } from "react-native";

export interface UserTypesProps {
  name: string;
  isCheck?: boolean;
  width?: string | number; // Could be a string in percentage or a number
  image: ImageSourcePropType;
  onPress?: () => void;
  height?: number;
  isEdit?: boolean;
}
