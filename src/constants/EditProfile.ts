import moment from "moment";

export const GENDER_OPTIONS = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
  { label: "Other", value: "O" },
];

export const CITY_OPTIONS = [
  { label: "Ghaziabad", value: "Ghaziabad" },
  { label: "Meerut", value: "Meerut" },
  { label: "Muzaffarnagar", value: "Muzaffarnagar" },
  { label: "Hapur", value: "Hapur" },
];

export const STATE_OPTIONS = [
  { label: "Andhra Pradesh", value: "ap" },
  { label: "Arunachal Pradesh", value: "ar" },
  { label: "Assam", value: "as" },
  { label: "Bihar", value: "br" },
  { label: "Chhattisgarh", value: "cg" },
  { label: "Goa", value: "ga" },
  { label: "Gujarat", value: "gj" },
  { label: "Haryana", value: "hr" },
  { label: "Himachal Pradesh", value: "hp" },
  { label: "Jharkhand", value: "jh" },
  { label: "Karnataka", value: "ka" },
  { label: "Kerala", value: "kl" },
  { label: "Madhya Pradesh", value: "mp" },
  { label: "Maharashtra", value: "mh" },
  { label: "Manipur", value: "mn" },
  { label: "Meghalaya", value: "ml" },
  { label: "Mizoram", value: "mz" },
  { label: "Nagaland", value: "nl" },
  { label: "Odisha", value: "or" },
  { label: "Punjab", value: "pb" },
  { label: "Rajasthan", value: "rj" },
  { label: "Sikkim", value: "sk" },
  { label: "Tamil Nadu", value: "tn" },
  { label: "Telangana", value: "tg" },
  { label: "Tripura", value: "tr" },
  { label: "Uttar Pradesh", value: "up" },
  { label: "Uttarakhand", value: "ut" },
  { label: "West Bengal", value: "wb" },
];

export const DATE_OPTIONS = () =>
  Array.from({ length: 31 }).map((_, i) => {
    const value = `${i + 1}`;
    const formattedValue = value.length === 1 ? `0${value}` : value;

    return {
      label: formattedValue,
      value: formattedValue,
    };
  });

export const MONTH_OPTIONS = () =>
  Array.apply(0, Array(12)).map((_, i) => ({
    label: moment().month(i).format("MMM"),
    value: moment().month(i).format("MMM"),
  }));

export const ROLE_OPTIONS = ["player", "coach", "parent"];
