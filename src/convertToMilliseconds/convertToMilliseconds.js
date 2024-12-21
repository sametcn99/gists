/**
 * @typedef {Object} Time
 * @property {number} [hours]
 * @property {number} [minutes]
 * @property {number} [seconds]
 */

/**
 * @param {Time} param0
 * @returns {number}
 */
function convertToMilliseconds({ hours = 0, minutes = 0, seconds = 0 }) {
  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = 60 * MS_PER_SECOND;
  const MS_PER_HOUR = 60 * MS_PER_MINUTE;

  return (
    hours * MS_PER_HOUR + minutes * MS_PER_MINUTE + seconds * MS_PER_SECOND
  );
}

const time = { hours: 1, minutes: 30, seconds: 45 };
const milliseconds = convertToMilliseconds(time);
console.log(milliseconds); // 5445000
