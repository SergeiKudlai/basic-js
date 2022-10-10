const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  // const DOUBLE_NEXT = '--double-next';
  // const DOUBLE_PREV = '--double-prev';
  // const DISCARD_NEXT = '--discard-next';
  // const DISCARD_PREV = '--discard-prev';
  // const NEW_ARR = [...arr];

  // if (NEW_ARR.includes(DOUBLE_NEXT) && NEW_ARR.includes(DOUBLE_NEXT) && NEW_ARR.includes(DISCARD_NEXT) && DISCARD_PREV) return [];

  // const RESULT = NEW_ARR.reduce((acc, value, index, arr) => {



  //   if (value === DOUBLE_PREV) {
  //     if (index === 0) {
  //       arr.splice(index, 1);
  //       acc = [...arr];
  //     } else {
  //       const DOUBLE_PREV = arr[index - 1];
  //       arr.splice(index, 1, DOUBLE_PREV);
  //       acc = [...arr];
  //     }
  //   }

  //   if (value === DOUBLE_NEXT) {
  //     if (index === NEW_ARR.length - 1) {
  //       arr.splice(index, 1);
  //       acc = [...arr];
  //     } else {
  //       const DOUBLE_NUM = arr[index + 1];
  //       arr.splice(index, 1, DOUBLE_NUM);
  //       acc = [...arr];
  //     }
  //   }

  //   if (value === DISCARD_PREV) {
  //     if (index === 0) {
  //       arr.splice(index, 1);
  //       acc = [...arr];
  //     } else {
  //       arr.splice(index - 1, 2);
  //       acc = [...arr];
  //     }
  //   }

  //   if (value === DISCARD_NEXT) {
  //     arr.splice(arr.indexOf(value), 2);
  //     acc = [...arr];
  //   }


  //   if (NEW_ARR.includes(DISCARD_NEXT) && NEW_ARR.includes(DISCARD_PREV)) {
  //     const indexNext = NEW_ARR.indexOf(DISCARD_NEXT);
  //     const indexPrev = NEW_ARR.indexOf(DISCARD_PREV);

  //     if (indexNext < indexPrev && indexPrev - indexNext === 2) {
  //       const CURENT_INDEX = indexNext + 1;
  //       if (value !== DISCARD_NEXT && value !== DISCARD_PREV && value !== NEW_ARR[CURENT_INDEX]) {
  //         arr.splice(indexNext, 3)
  //         acc = [...arr];
  //       }
  //     } else {
  //       arr.splice(indexPrev - 1, 2);
  //       arr.splice(arr.indexOf(DISCARD_NEXT), 2);
  //       acc = [...arr];
  //     }
  //   }

  //   if (NEW_ARR.includes(DISCARD_NEXT) && NEW_ARR.includes(DOUBLE_PREV)) {
  //     const indexNext = NEW_ARR.indexOf(DISCARD_NEXT);
  //     const indexDouble = NEW_ARR.indexOf(DOUBLE_PREV);

  //     if (indexNext < indexDouble && indexDouble - indexNext === 2) {
  //       arr.splice(indexNext, 3);
  //       acc = [...arr];
  //     }
  //   }

  //   return acc;
  // }, []);

  // return RESULT;
}


module.exports = {
  transform
};