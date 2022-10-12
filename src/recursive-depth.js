const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.flatArr = 1;
  }

  calculateDepth(arr) {
    return arr.reduce((acc, value) => { if (Array.isArray(value)) acc = Math.max(this.calculateDepth(value), acc); return acc }, 0) + this.flatArr;
  }
}

module.exports = {
  DepthCalculator
};
