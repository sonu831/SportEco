import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Address, Venue } from "../Venue/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  BottomTabNavigation: any;
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
  AddProgram:
    | {
        isEdit?: boolean;
      }
    | any;
  SelectPlayer: any;
  AddSession: any;
  AddEvents: any;
  AddVenue:
    | { isEdit?: boolean; address?: Address }
    | { address: Address }
    | undefined;
  BatchScreen: any;
  ProgramDetails: any;
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
  Players: { shouldRefresh?: boolean };
  PlayerProfileManager: { playerId: string; isEdit?: boolean; batch_Id?: string } | any;
  PlayerProfile: { playerId: string };
  Batches: { shouldRefresh?: boolean } | any;
  BatchInfo: { shouldRefresh?: boolean } | any;
  CreateBatch: { shouldRefresh?: boolean } | any;
  EditBatchInfo: { shouldRefresh?: boolean } | any;
  AddRemovePlayer: { batch_Id?: string; shouldRefresh?: boolean } | any;
  UpdatePlayerProfile: any;
  Venues: { shouldRefresh?: boolean } | any;
  VenueDetails: { venueDetails: Venue } | any;
  ChooseLocation: any;
  CreateVenue: any;
  Programs: any;
  CreatePrograms: any;
  CreateSession: any;
  ProgramInfo: any;
  SessionDetails: any;
  EditSession: any;
  EditProgram: any;
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
