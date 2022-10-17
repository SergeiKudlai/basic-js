const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const RESULT = [...'' + n].map(Number);
  const RESULT_NUM = RESULT.map((_, index) => {
    const num = RESULT.concat();
    num.splice(index, 1);
    return num.join('');
  })
  return Math.max(...RESULT_NUM);
}

module.exports = {
  deleteDigit
};
