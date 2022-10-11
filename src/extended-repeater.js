const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let value = str;
  if (options.addition) options.addition = `${options.addition}`;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (typeof value !== 'string') value = `${value}`;

  if (typeof options.addition === 'boolean' || options.addition === null) {
    options.addition = `${options.addition}`;
  } else if (!options.addition) {
    options.addition = '';
  }

  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  let result = '';
  let text2 = '';

  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      text2 += `${addition}${additionSeparator}`;
    }
  } else {
    text2 = `${addition}${additionSeparator}`;
  }

  text2 = text2.slice(0, -additionSeparator.length);

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      result += `${value}${text2}${separator}`;
    }
  } else {
    result = `${value}${text2}${separator}`;
  }

  result = result.slice(0, -separator.length);

  return result;
}

module.exports = {
  repeater
};
