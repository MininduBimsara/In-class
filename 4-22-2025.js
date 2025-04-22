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

  const Result  = Number(hashedArray.join(''));

  return Result;
}

const input = 641974037132;
const Result = hash(input);
console.log(Result);