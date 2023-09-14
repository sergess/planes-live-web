import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date, format, tz) => {
  if (tz) {
    return dayjs(date).tz(tz).format(format);
  }

  return dayjs(date).format(format);
};

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
export const convertSecondsToDuration = (seconds) => {
  const ago = dayjs().subtract(seconds, 'second');
  const dur = dayjs.duration(dayjs().diff(ago));

  return dayjs.utc(dur.asMilliseconds()).format('H[h] mm[m]');
};

export const isSameDay = (arrayOfDates, date) => arrayOfDates?.some((item) => dayjs(item).isSame(date, 'day'));

export const getUnixTime = date => dayjs(date).valueOf();
