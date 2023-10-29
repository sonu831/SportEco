import { CustomDate } from "./date";

export interface PlayerDetails {
  playerId: string;
  firstName: string;
  lastName: string;
  dob: CustomDate;
  phoneNumber: string;
  selectedOption: string;
  isDatePickerVisible: boolean;
  selectedDate: Date;
  avatarImage: string;
  profilePic: string;
}
