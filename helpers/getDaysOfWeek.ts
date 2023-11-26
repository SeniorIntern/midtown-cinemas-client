export default function getDaysOfWeek() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const result = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    result.push({
      currentDay: days[(currentDay + i) % 7],
      currentDate: date.getDate(),
      currentMonth: currentMonth,
    });
  }
  return result;
}
