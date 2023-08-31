import * as dayjs from 'dayjs';

export const isSameDay = (arrayOfDates, date) => arrayOfDates?.some((item) => dayjs(item).isSame(date, 'day'));

export default isSameDay;
