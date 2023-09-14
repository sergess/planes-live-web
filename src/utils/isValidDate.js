export const isValidDate = (date) => !Number.isNaN(Date.parse(date));

export default isValidDate;
