const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (+sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) {
    return false;
  } else if (isNaN(sampleActivity)) {
    return false;
  } else if (typeof sampleActivity !== 'string') {
    return false;
  }

  const K = 0.693;
  const NUM_ONE = Math.log(MODERN_ACTIVITY / sampleActivity);
  const NUM_TWO = K / HALF_LIFE_PERIOD;
  const RESULT = Math.ceil(NUM_ONE / NUM_TWO);

  return RESULT;
}

module.exports = {
  dateSample
};
