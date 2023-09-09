import { useDispatch } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";

const useEventScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "Events">;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleGoBack = () => navigation.goBack();

  const handleAddIcon = () => {
    navigation.navigate("AddEvents");
  };

  return {
    handleGoBack,
    handleAddIcon,
  };
};

export default useEventScreen;
