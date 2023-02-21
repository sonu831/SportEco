import { fetchUserById } from "./../../services/users";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { isAccountVerified$, userDetails$ } from "../../store/users/selectors";
import { AppDispatch } from "../../store";
import { isLoading$ } from "../../store/common/selectors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { setIsVerified } from "../../store/users/reducers";

type UserDataProps = {
  phNum: string;
  id: string;
  fName: string;
  lName: string;
  mName: string;
  email: string;
  gender: string;
  category: string;
  state: string;
  city: string;
  dob: string;
  imageURl: string;
};

SplashScreen.preventAutoHideAsync();

const useNavigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [appReady, isAppReady] = useState(false);
  const [userData, setUserData] = useState<Partial<UserDataProps>>();
  const userDetails = useSelector(userDetails$);
  const isAccountVerified = useSelector(isAccountVerified$);
  const isLoading = useSelector(isLoading$);
  const [fontsLoaded] = useFonts({
    "Avenir-Regular": require("../../assets/fonts/Avenir-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded)
      dispatch(fetchUserById()).then((res) => {
        if (res.payload.success) {
          dispatch(setIsVerified(true));
          isAppReady(true);
        } else {
          isAppReady(true);
        }
      });
  }, [fontsLoaded]);

  useEffect(() => {
    setUserData(userDetails);
  }, [userDetails]);

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    if (appReady) hideSplashScreen();
  }, [appReady]);

  return {
    userData,
    isLoading,
    appReady,
    isAccountVerified,
  };
};

export default useNavigation;
