const nearestFlightDate = (arr, val) => arr.reduce((nearest, num) => (
  Math.abs(num - val) >= Math.abs(nearest - val)
  && nearest < num
    ? nearest
    : num
));

const getNearestFlightIndex = (arr, val) => arr.indexOf(nearestFlightDate(arr, val));

export default getNearestFlightIndex;
