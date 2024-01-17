export type TextSearchItem = {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: Number;
    };
  };
  icon: string;
  name: string;
  place_id: string;
};
