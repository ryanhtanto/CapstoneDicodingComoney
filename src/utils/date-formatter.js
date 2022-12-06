const getFullDate = () => {
  const unformattedDate = new Date();
  const day = String(unformattedDate.getDate()).padStart(2, '0');
  const month = String(unformattedDate.getMonth() + 1).padStart(2, '0');
  const year = unformattedDate.getFullYear();

  return `${year}-${month}-${day}`;
};

const getMonthYear = () => {
  const unformattedDate = new Date();
  const month = String(unformattedDate.getMonth() + 1).padStart(2, '0');
  const year = unformattedDate.getFullYear();

  return `${year}-${month}`;
};

const getNextMonthYear = () => {
  const unformattedDate = new Date();
  let month = String(unformattedDate.getMonth() + 1).padStart(2, '0');
  let year = unformattedDate.getFullYear();

  if (month <= 11) {
    month += 1;
  } else {
    year += 1;
    month = '01';
  }

  return `${year}-${month}`;
};

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

export {
  getFullDate, showFormattedDate, getMonthYear, getNextMonthYear,
};
