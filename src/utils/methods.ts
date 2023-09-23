export const findIndexByValue = (
  object: { [key: string]: string },
  value: string
) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return null; // Value not found in the object
};
