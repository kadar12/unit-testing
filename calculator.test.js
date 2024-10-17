import { sum, multiply } from "./calculator.js";

import { test, expect, describe } from "vitest";

describe("Sum test", function () {
  test("adds 1 & 2 to return 3", function () {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 9 & 5 to return 3", function () {
    const result = sum(9, 5);
    const answer = 14;
    expect(result).toBe(answer);
  });
});

describe("multiply test", function () {
  test("multiply 5 & 5 to return 25", function () {
    const result = multiply(5, 5);
    const answer = 25;
    expect(result).toBe(answer);
  });

  test("multiply 10 & 15 to return 150", function () {
    const result = multiply(10, 15);
    const answer = 150;
    expect(result).toBe(answer);
  });
});
