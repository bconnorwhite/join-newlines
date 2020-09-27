import { test, expect } from "@jest/globals";
import join from "../source";

test("basic", () => {
  expect(join([
    "This is the first line.",
    "Then I want this on a second line.",
    "I also want this on a third line."
  ])).toBe("This is the first line.\nThen I want this on a second line.\nI also want this on a third line.");
});

test("append newline to end", () => {
  expect(join([
    "This is the first line.",
    "Then I want this on a second line.",
    "I also want a newline at the end."
  ], true)).toBe("This is the first line.\nThen I want this on a second line.\nI also want a newline at the end.\n");
});
