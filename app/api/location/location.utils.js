const data = [
  {
    location: "Mülheim",
    latitude: 51.4275,
    longitude: 6.8825,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Düsseldorf",
    latitude: 51.2333,
    longitude: 6.7833,
  },
  {
    location: "Essen",
    latitude: 51.4508,
    longitude: 7.0131,
  },
  {
    location: "Cologne",
    latitude: 50.9364,
    longitude: 6.9528,
  },
  {
    location: "London",
    latitude: 51.5073,
    longitude: -0.1276,
  },
  {
    location: "Dhaka",
    latitude: 23.7717,
    longitude: 90.3994,
  },
  {
    location: "Singapor",
    latitude: 1.2899275,
    longitude: 103.8519072,
  },
  {
    location: "Toranto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
];

export function getLocations() {
  return data;
}

export function getLocationByName(location) {
  if (!location) return null;
  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return found || {};
}
