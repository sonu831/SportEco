export interface Address {
  city?: string;
  country?: string;
  district?: string | null;
  isoCountryCode?: string;
  name?: string;
  postalCode?: string;
  region?: string;
  street?: string;
  streetNumber?: string;
  subregion?: string;
  timezone?: string | null;
  latitudelongitude?: LocationObject;
}

export type VenueRequest = {
  image: FormData;
  venue_name: string;
  court_name: string;
  sport: string;
  address: string;
  city: string;
  state: string;
  latitudelongitude: string;
};

export interface LocationObject {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export type Venue = {
  latitudelongitude?: string;
  _id: string;
  venueName: string;
  venueLocation: string;
  sport: string;
  distance?: string;
  description?: string;
  image?: string;
  state?: string;
  city?: string;
  courtName?:string
};

export type VenueCardProps = {
  onPress: () => void;
  onDeleteVenue: (_id: string) => void;
  venueKey?: number;
  details: Venue;
};
