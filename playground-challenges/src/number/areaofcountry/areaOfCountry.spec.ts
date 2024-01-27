import { expect, test } from "@playwright/test";
import areaOfCountry from "./areaOfCountry";

test("areaOfCountry", async () => {
  expect(areaOfCountry("USA", 9372610)).toBe(
    "USA is 6.29% of the total world's landmass"
  );
  expect(areaOfCountry("Russia", 17098242)).toBe(
    "Russia is 11.48% of the total world's landmass"
  );
  expect(areaOfCountry("Iran", 1648195)).toBe(
    "Iran is 1.11% of the total world's landmass"
  );
  expect(areaOfCountry("India", 3287590)).toBe(
    "India is 2.21% of the total world's landmass"
  );
  expect(areaOfCountry("China", 9706961)).toBe(
    "China is 6.52% of the total world's landmass"
  );
  expect(areaOfCountry("Yemen", 527968)).toBe(
    "Yemen is 0.35% of the total world's landmass"
  );
  expect(areaOfCountry("Switzerland", 41284)).toBe(
    "Switzerland is 0.03% of the total world's landmass"
  );
});
