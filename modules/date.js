import { DateTime } from './luxon.js';

const getTime = () => {
  const localtime = DateTime.local();
  return localtime.toLocaleString(DateTime.DATETIME_MED);
};

export default getTime;