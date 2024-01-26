import { expect, test } from "@playwright/test";
import removeLeadingTrailing from "./removeLeadingTrailing";

test("removeLeadingTrailing", async () => {
  expect(removeLeadingTrailing("230.000")).toBe("230");
  expect(removeLeadingTrailing("00402")).toBe("402");
  expect(removeLeadingTrailing("03.1400")).toBe("3.14");
  expect(removeLeadingTrailing("30")).toBe("30");
  expect(removeLeadingTrailing("30.0000")).toBe("30");
  expect(removeLeadingTrailing("24340")).toBe("24340");
  expect(removeLeadingTrailing("0404040")).toBe("404040");
  expect(removeLeadingTrailing("0")).toBe("0");
  expect(removeLeadingTrailing("00")).toBe("0");
  expect(removeLeadingTrailing("0.000000")).toBe("0");
  expect(removeLeadingTrailing("0000.000")).toBe("0");
  expect(removeLeadingTrailing("00.0001")).toBe("0.0001");
  expect(removeLeadingTrailing("10000")).toBe("10000");
  expect(removeLeadingTrailing("1345")).toBe("1345");
  expect(removeLeadingTrailing("30.000020")).toBe("30.00002");
  expect(removeLeadingTrailing("00200.1900001")).toBe("200.1900001");
});
