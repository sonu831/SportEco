// useDateConversion.ts

import moment, { Moment } from "moment";
import { CustomDate } from "../interface";

export const convertToDateObject = (customDate: CustomDate): Moment => {
  const { date, month, year } = customDate;
  return moment({
    year: parseInt(year, 10),
    month: parseInt(month, 10) - 1,
    date: parseInt(date, 10),
  });
};

export const convertToCustomDateObject = (dateObject: Date): CustomDate => {
  const date = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear().toString();
  return { date, month, year };
};
