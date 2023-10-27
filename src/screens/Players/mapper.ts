import { PlayerData } from "./config";

export const mapResponseToPlayerData = (response: any): PlayerData => {
  const {
    _id,
    account_createdAt = "",
    avatarimage,
    coach_id = "",
    dbo = {},
    first_name = "",
    gender = "",
    last_name = "",
    phonenumber = "",
    profile_pic = null,
  } = response;
  return {
    __v: 0, // Default value, update this if you have the actual value
    _id: _id, // Default value, update this if you have the actual value
    account_createdAt,
    avatarimage,
    coach_id,
    dbo: {
      date: dbo.date || "",
      month: dbo.month || "",
      year: dbo.year || "",
    },
    first_name,
    gender,
    last_name,
    phonenumber,
    profile_pic: profile_pic
      ? `data:image/png;base64,${profile_pic.filedata}`
      : null,
  };
};
