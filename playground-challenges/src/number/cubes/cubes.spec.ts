import { expect, test } from "@playwright/test";
import cubes from "./cubes";

test("cubes", async () => {
  expect(cubes(2)).toBe(8);
  expect(cubes(3)).toBe(27);
  expect(cubes(4)).toBe(64);
  expect(cubes(5)).toBe(125);
  expect(cubes(10)).toBe(1000);
});
