// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
export default function num_of_digits(num: Number) {
  return `${num}`.match(/\d/g)!.length;
}
