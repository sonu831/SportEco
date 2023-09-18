import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Home: undefined;
  EditProfile: { isAddPlayer?: boolean; isEdit?: boolean } | undefined;
  CreateProfile: undefined;
  CommonScreen: { title: string; shouldRefresh?: boolean };
  Landing: undefined;
  Loading: undefined;
  Verification: undefined;
  Main: undefined;
  Calendar: undefined;
  Message: undefined;
  AddBatch:
  | {
    isEdit?: boolean;
  }
  | any;
  AddProgram:
  | {
    isEdit?: boolean;
  }
  | any;
  SelectPlayer: any;
  AddSession: any;
  AddEvents: any;
  AddVenue: { isEdit?: boolean } | undefined;
  BatchScreen: any;
  ProgramDetails: any;
  VenueDetail: any;
  Profile: { player?: boolean } | undefined;
  Confirmation:
  | {
    label?: string;
    navigateTo?: keyof RootStackParamList;
    navigateOption?: any;
    isNewUser?: boolean;
  }
  | undefined;
  Events: any;
  CalendarScreen: any;
  MyAccount: any;
  ChangeAvatar: any;
  Notification: any;
  Players: any;
  CreatePlayer: any;
  Batches: any;
  BatchInfo: any;
  CreateBatch: any;
  EditBatchInfo: any;
  AddRemovePlayer: any;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootBottomTabParamList = {
  Main: undefined;
  Calendar: undefined;
  Message: undefined;
  Profile: undefined;
};

export type RootBottomTabProps<Screen extends keyof RootBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
