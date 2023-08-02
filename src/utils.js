export default function removeItemFromArray(arr, objToRemove) {
  const index = arr.findIndex((item) => JSON.stringify(item) === JSON.stringify(objToRemove));
  if (index !== -1) {
    return arr.filter((item, i) => i !== index);
  }
  return arr;
}


export function generateRandomID() {
  const min = 1000; // Minimum 4-digit number (inclusive)
  const max = 9999; // Maximum 4-digit number (inclusive)

  const randomID = Math.floor(Math.random() * (max - min + 1) + min);
  return randomID.toString();
}
