/* eslint-disable prettier/prettier */
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

export {dateTimeAfterThreeDays, dateTimeAfterSevenDays};
