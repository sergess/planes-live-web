import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

export const formatDate = (date, format) => dayjs(date).format(format);
dayjs.extend(duration);

export const getDateDifference = (
  startDate,
  endDate,
) => dayjs
  .duration(dayjs(startDate)
    .diff(dayjs(endDate)));

export const getDateDifferenceHM = (
  startDate,
  endDate,
) => {
  const diff = getDateDifference(
    startDate,
    endDate,
  );
  const hours = diff.hours();
  const min = diff.minutes();

  return `${hours !== 0 ? `${hours}h` : ''} ${min !== 0 ? min : ''}m`;
};
