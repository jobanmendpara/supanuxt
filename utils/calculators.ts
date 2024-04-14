export function calculateTimeElapsed(dateString: string): string {
  const dayjs = useDayjs();
  const timeZone = useRuntimeConfig().public.timeZone;

  const startTime = dayjs(dateString).utc().tz(timeZone);
  const now = dayjs().utc().tz(timeZone);

  const diff = now.diff(startTime, 'milliseconds');

  const millisecondsElapsed = dayjs.duration(diff);

  const days = millisecondsElapsed.days();
  const hours = millisecondsElapsed.hours();
  const minutes = millisecondsElapsed.minutes();
  const seconds = millisecondsElapsed.seconds();

  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return days > 0
    ? `+${days} day(s) ${paddedHours}:${paddedMinutes}:${paddedSeconds}`
    : `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}
