import { expect, test } from "@playwright/test";
import num_of_digits from "./num_of_digits";

test("num_of_digits", async () => {
  expect(num_of_digits(13124)).toBe(5);
  expect(num_of_digits(0)).toBe(1);
  expect(num_of_digits(-12381428)).toBe(8);
  expect(num_of_digits(12)).toBe(2);
  expect(num_of_digits(42)).toBe(2);
  expect(num_of_digits(1000)).toBe(4);
  expect(num_of_digits(136)).toBe(3);
  expect(num_of_digits(1000000000)).toBe(10);
  expect(num_of_digits(2147483647)).toBe(10);
  expect(num_of_digits(-2147483647)).toBe(10);
});
