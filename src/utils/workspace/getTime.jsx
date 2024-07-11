function getTime(time) {
  const today = new Date();
  const newTime = new Date(time)
  const differenceInMs = today - newTime;

  const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));

  return {
    days: days,
    hours: hours,
    minutes: minutes,
  };
}


export default getTime;