import * as dayjs from 'dayjs';

// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date, format) => dayjs(date).format(format);
