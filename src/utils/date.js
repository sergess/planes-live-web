import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

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
export const getLastUpdateTimeText = (date) => {
  const receiveDate = dayjs(date).tz(dayjs.tz.guess());
  const startDate = dayjs().tz(dayjs.tz.guess());

  const diff = getDateDifference(
    startDate,
    receiveDate,
  );
  const hours = Math.abs(diff.hours());
  const min = Math.abs(diff.minutes());

  if (!hours) {
    return `${min} minutes ago`;
  }
  if ((hours > 1 || (hours === 1 && min > 0)) && startDate.isToday()) {
    return `Today, ${dayjs(receiveDate).format('HH:MM')}`;
  } if (startDate.isYesterday()) {
    return `Yesterday, ${receiveDate.format('DD.MM.YYYY')}`;
  }

  return receiveDate.format('DD.MM.YYYY');
};

export const getDateDifferenceHM = (
  startDate,
  endDate,
  minLabel = 'm',
) => {
  const diff = getDateDifference(
    startDate,
    endDate,
  );
  const hours = Math.abs(diff.hours());
  const min = Math.abs(diff.minutes());

  return `${hours !== 0 ? `${hours}h` : ''} ${min}${minLabel}`;
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

export const getUnixTime = (date) => dayjs(date).valueOf();
