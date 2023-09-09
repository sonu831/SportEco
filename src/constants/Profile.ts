import phoneIcon from "../assets/images/phone.png";
import crownIcon from "../assets/images/crown.png";
import calendarIcon from "../assets/images/dob_calendar.png";
import emailIcon from "../assets/images/email.png";
import locationIcon from "../assets/images/location.png";
import moment from "moment";

export const mockUser = {
  id: 1,
  Name: "Konstance Walworth",
  age: 32,
  phone: "428 594 1882",
  gender: "Female",
  email: "kwalworth0@guardian.co.uk",
  dob: "2022-08-22",
  city: "Palmas De Gran Canaria, Las",
  state: "Canarias",
  image: "http://dummyimage.com/128x100.png/cc0000/ffffff",
};

export const UserDetailsFields = (user: any) =>
  !!user._id
    ? [
        {
          title: "Phone",
          value: user.contact_no,
          icon: phoneIcon,
        },
        {
          title: "E-Mail",
          value: user.email,
          icon: emailIcon,
        },
        {
          title: "Date of Birth",
          value: moment(user.dob).format("DD.MM.YYYY"),
          icon: calendarIcon,
        },
        {
          title: "Gender",
          value: user.gender,
          icon: crownIcon,
        },
      ]
    : [];

export const locations = (user: any) =>
  user._id
    ? [
        {
          value: `${user.city}, ${user.state}`,
          icon: locationIcon,
        },
      ]
    : [];
