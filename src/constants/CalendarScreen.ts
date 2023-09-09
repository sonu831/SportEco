import moment from "moment";

export const totalHours = () => {
  const hoursInDay = [];

  for (let hour = 0; hour < 24; hour++) {
    hoursInDay.push(moment().startOf("day").add(hour, "hours"));
  }

  return hoursInDay;
};
