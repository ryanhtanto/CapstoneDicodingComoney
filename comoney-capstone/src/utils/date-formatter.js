const getFullDate = () => {
  const unformattedDate = new Date();
  const day = unformattedDate.getDate();
  const month = unformattedDate.getMonth() + 1;
  const year = unformattedDate.getFullYear();

  return `${year}-${month}-${day}`;
}

const getMonthYear = () => {
  const unformattedDate = new Date();
  const month = unformattedDate.getMonth() + 1;
  const year = unformattedDate.getFullYear();

  return `${year}-${month}`;
}

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

export { getFullDate, showFormattedDate, getMonthYear };