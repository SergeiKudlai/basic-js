// const { NotImplementedError } = require('../extensions/index.js');

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
  if (!options.addition) options.addition = '';
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  const arrTimes = [];

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      arrTimes.push(`${value}${addition}${separator}`);
    }
  } else {
    arrTimes.push(value);
  }
  console.log(arrTimes);
}



console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 6, additionSeparator: '00' }));

module.exports = {
  repeater
};
