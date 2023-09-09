import {fetchUserById} from './../../services/users';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  isAccountVerified$,
  isLoginVerified$,
  userDetails$,
} from '../../store/users/selectors';
import {AppDispatch} from '../../store';
import {isLoading$} from '../../store/common/selectors';
import SplashScreen from 'react-native-splash-screen';
import Fonts from 'react-native-fonts';
import {setIsVerified} from '../../store/users/reducers';
import {fetchFromStorage} from '../../utils/storage';
import {StorageKeys} from '../../constants/storageKeys';

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
  const isLoginVerified = useSelector(isLoginVerified$);
  const isLoading = useSelector(isLoading$);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // const [fontsLoaded] = useFonts({
  //   'Avenir-Regular': require('../../assets/fonts/Avenir-Regular.ttf'),
  // });

  useEffect(() => {
    async function loadFonts() {
      await Fonts.isFontSupported({
        'Avenir-Regular': require('../../assets/fonts/Avenir-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      //Below Code Added to avoid user not authorised when first time loaded
      fetchFromStorage(StorageKeys.tokenKey).then(res => {
        if (res) {
          dispatch(fetchUserById()).then(res => {
            if (res?.payload?.success) {
              dispatch(setIsVerified(true));
            }
            isAppReady(true);
          });
        } else if (res == null) {
          isAppReady(true);
        }
      });
    }
  }, [fontsLoaded]);

  useEffect(() => {
    setUserData(userDetails);
  }, [userDetails]);

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    if (appReady) {
      hideSplashScreen();
    }
  }, [appReady]);

  return {
    userData,
    isLoading,
    appReady,
    isAccountVerified,
    isLoginVerified,
  };
};

export default useNavigation;
