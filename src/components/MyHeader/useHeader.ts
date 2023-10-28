// hooks/useHeaderComponent.ts
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../constants/ScreenNames";

const useHeader = () => {
  const navigation = useNavigation();

  const goBack = (currentScreen: keyof typeof ScreensName) => {
    if (
      currentScreen === ScreensName.Players ||
      currentScreen === ScreensName.Batches ||
      currentScreen === ScreensName.Programs
    ) {
      navigation.navigate(ScreensName.Main);
    } else {
      navigation.goBack();
    }
  };

  return {
    goBack,
    // any other logic you want to include
  };
};

export default useHeader;
