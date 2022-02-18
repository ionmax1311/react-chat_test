export const formatDate = () => {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getMonth()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${hours}.${minutes}`;
};
