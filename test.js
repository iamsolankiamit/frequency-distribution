import test from "ava";
import frequencyDistribution from "./index";

test("given an array of numbers returns their frequency distribution with range 1", t => {
  const result = frequencyDistribution([1, 2, 3, 4]);
  const expected = { 1: 1, 2: 1, 3: 1, 4: 1 };
  t.deepEqual(expected, result);
});

test("given an array of integers and floating numbers returns their frequency distribution with range 1", t => {
  const result = frequencyDistribution([
    1,
    2,
    3,
    4,
    5,
    1,
    2,
    3,
    0,
    0.5,
    -1,
    -0.5,
    -0.45,
    -0.55,
    0.999
  ]);
  const expected = {
    "-1": 2,
    0: 3,
    1: 1,
    1: 4,
    2: 1,
    2: 2,
    3: 1,
    3: 2,
    4: 1,
    5: 1
  };
  t.deepEqual(expected, result);
});

test("given an array of numbers returns their frequency distribution with range 2", t => {
  const result = frequencyDistribution([1, 2, 3, 4], 2);
  const expected = { "1,2": 2, "3,4": 2 };
  t.deepEqual(expected, result);
});

test("given an array of integers and floating numbers returns their frequency distribution with range 4", t => {
  const result = frequencyDistribution(
    [1, 2, 3, 4, 5, 1, 2, 3, 0, 0.5, -1, -0.5, -0.45, -0.55, 0.999],
    4
  );
  const expected = { "-3,0": 9, "1,4": 6 };
  t.deepEqual(expected, result);
});
