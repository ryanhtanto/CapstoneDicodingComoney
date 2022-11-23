const getFullDate = () => {
  const unformattedDate = new Date();
  const day = unformattedDate.getDate();
  const month = unformattedDate.getMonth() + 1;
  const year = unformattedDate.getFullYear();

  return `${year}-${month}-${day}`;
}

export { getFullDate };