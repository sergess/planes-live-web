export const deg2rad = (deg) => deg * (Math.PI / 180);
export const getDistanceFromLatLonInKm = (
  { lat: lat1, lon: lon1 },
  { lat: lat2, lon: lon2 },
) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
    * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km

  return Math.round(d);
};
const radiansToDegrees = (radians) => {
  const pi = Math.PI;

  return radians * (180 / pi);
};
export const getCoordinatesAngle = (current, next) => radiansToDegrees(
  Math.atan2(next.lon - current.lon, next.lat - current.lat),
);
