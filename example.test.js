import { test, expect, describe } from "vitest";

function add(a, b) {
  return a + b;
}

describe("sum addition", function () {
  test("add two numbers together", function () {
    const result = add(5, 5);
    const answer = 10;
    expect(result).toBe(answer);
  });
});
