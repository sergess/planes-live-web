import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date, format, tz) => dayjs(date).tz(tz).format(format);

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
  const hours = Math.abs(diff.hours());
  const min = Math.abs(diff.minutes());

  return `${hours !== 0 ? `${hours}h` : ''} ${min !== 0 ? min : ''}m`;
};
export const filterOnlyFutureFlights = ({ flight }, dateKey, tz) => {
  const time = flight[`${dateKey}_actual`] ? flight[`${dateKey}_actual`] : flight[dateKey];

  return dayjs().tz(tz).isBefore(dayjs(time).tz(tz));
};
