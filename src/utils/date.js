import * as dayjs from 'dayjs';
import { DURATION_FORMATS } from '@/constants/date';
import duration from 'dayjs/plugin/duration';

export const formatDate = (date, format) => dayjs(date).format(format);
dayjs.extend(duration);

export const getDateDifference = (
  startDate,
  endDate,
  format = DURATION_FORMATS.MINUTES,
) => dayjs
  .duration(dayjs(startDate)
    .diff(dayjs(endDate))).format(format);
