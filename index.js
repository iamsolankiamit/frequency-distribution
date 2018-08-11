const distribution = (array, rangeLength = 1) => {
  if (!Array.isArray(array))
    throw new Error(
      `expected first argument to be any Array<Number> but got item ${array} of type ${typeof array}`
    );
  return array.sort((a, b) => a - b).reduce((prev, current) => {
    const a = Math.round(current / rangeLength);
    const r = rangeLength === 1 ? a : `${(a - 1) * rangeLength + 1},${a * rangeLength}`;
    const lastVal = prev[r] || 0;
    const newVal = { ...prev };
    newVal[r] = lastVal + 1;
    return newVal;
  }, {});
};
module.exports = distribution;
