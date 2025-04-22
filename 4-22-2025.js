function hash(input) {
  let intArray = [];
  let hashedArray = [];

  // Convert the input to an integer array
  const str = input.toString();
  for (let i = 0; i < str.length; i++) {
    intArray.push(Number(str[i]));
  }

  // Hash the array by modulating each element by 3
  for (let i = 0; i < intArray.length; i++) {
    hashedArray.push(intArray[i] % 3);
  }

  return hashedArray;
}

const input = 1234567890;
const hashedArray = hash(input);
console.log(hashedArray);