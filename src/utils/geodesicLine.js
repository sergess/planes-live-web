import arc from 'arc';

// eslint-disable-next-line import/prefer-default-export
export const transformLineToGeodesic = (coordinates) => {
  const [startCoord, endCoord] = coordinates;
  if (!startCoord || !endCoord) return [];
  const [x, y] = startCoord;
  const [x1, y1] = endCoord;
  const start = { x, y };
  const end = { x: x1, y: y1 };
  const generator = new arc.GreatCircle(start, end);
  const lineArc = generator.Arc(100, { offset: 10 });

  return lineArc.json().geometry
    .coordinates;
};
