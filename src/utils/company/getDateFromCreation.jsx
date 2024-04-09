function getDateFromCreation(dataCreated, currentData) {
  // Parse the date strings into Date objects
  const createdDate = new Date(dataCreated);
  const currentDate = new Date(currentData);

  // Calculate the difference in milliseconds
  const differenceMs = currentDate - createdDate;

  // Convert milliseconds to days
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  // If the difference is less than one day, return difference in hours
  if (differenceDays === 0) {
    const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
    return `Created ${differenceHours} hours ago`;
  }

  // Return the result in days
  return `Created ${differenceDays} days ago`;
}


export default getDateFromCreation;