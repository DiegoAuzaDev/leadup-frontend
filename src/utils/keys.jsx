
const API_URL = `http://localhost:3004/api`;

const geocodeToAddressKey = (lat = 2.9378189, lng = -75.2727666) => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;
  let addressRequest = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return addressRequest;
};
export { API_URL, geocodeToAddressKey };
