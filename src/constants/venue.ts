import venueIcon from "../assets/images/venue-icon.png";
import volleyballIcon from "../assets/images/Volleyball.png";
import locationIcon from "../assets/images/location.png";

export const venueDetails = (venue: any) => {
  return [
    {
      title: "Venue",
      value: venue.venue_name,
      icon: venueIcon,
    },
    {
      title: "Court",
      value: venue.court_name,
      icon: venueIcon,
    },
    {
      title: "Sport",
      value: venue.sport,
      icon: volleyballIcon,
    },
  ];
};

export const venueLocationDetails = (venue: any) => {
  return [
    {
      title: "State",
      value: venue.state,
      icon: locationIcon,
    },
    {
      title: "City",
      value: venue.city,
      icon: locationIcon,
    },
    {
      title: "Address",
      value: venue.address,
      icon: locationIcon,
    },
  ];
};
