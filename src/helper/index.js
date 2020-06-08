export const yearGenerator = () => {
  const years = [];
  const start = 1905;
  const end = parseInt(new Date().getFullYear());

  let year = start;
  while (year <= end) {
    years.push(year++);
  }

  return years.reverse();
};

export const monthGenerator = () => {
  const months = [];
  const start = 1;
  const end = 12;

  let month = start;
  while (month <= end) {
    months.push(month++);
  }

  return months;
};

export const dayGenerator = () => {
  const days = [];
  const start = 1;
  const end = 31;

  let day = start;
  while (day <= end) {
    days.push(day++);
  }

  return days;
};
