export const capitalizeString = str => {
  if (typeof str !== "string") {
    alert("this is not a string!");
    return;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};
