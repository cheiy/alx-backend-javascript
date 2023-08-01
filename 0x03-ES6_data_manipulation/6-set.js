export default function setFromArray(array) {
  const newset = new Set();
  for (const idx in array) {
    if (array.hasOwnProperty(idx)) { // eslint-disable-line no-prototype-builtins
      newset.add(array[idx]);
    }
  }

  return newset;
}
