import AsyncStorage from "@react-native-async-storage/async-storage";

interface FetchFromStorageInterface {
  (key: string): Promise<string | null | undefined>;
}

export const fetchFromStorage: FetchFromStorageInterface = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (e) {
    console.log("Error while fetching data from storage -> ", e);
  }
};

export const storeDataInStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("Error while storing data from storage -> ", e);
  }
};
