const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *                               
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.valueStart = value;
    // this.latinic = /^[a-z\s]+$/i;
    this.arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) { //зашифровка
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const NEW_MESSAGE = message.toUpperCase();

    const OBJ_SYMBOL = {};

    for (let i = 0; i < NEW_MESSAGE.length; i++) {
      if (NEW_MESSAGE[i].charCodeAt(0) < 65 || NEW_MESSAGE[i].charCodeAt(0) > 90) OBJ_SYMBOL[i] = NEW_MESSAGE[i];
    }

    message = message.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');

    const MESSAGE_ARR = [...'' + message];

    const KEY_ARR = [...'' + key.repeat(message.length)];
    KEY_ARR.length = message.length; //ограничение длины

    const TABLE_OBJ = {}; //таблица
    this.arr.forEach((value, index) => TABLE_OBJ[value] = index);

    const FINNALY_ARR = Array(NEW_MESSAGE.length);
    const RESULT_ARR = [];

    if (this.valueStart === undefined || this.valueStart === true) {
      for (let i = 0; i < MESSAGE_ARR.length; i++) {
        let index = TABLE_OBJ[MESSAGE_ARR[i]] + TABLE_OBJ[KEY_ARR[i]];
        if (index >= 26) index -= this.arr.length;
        RESULT_ARR.push(this.arr[index]);
      }

      for (let i = 0, j = 0; i < NEW_MESSAGE.length; i++) {
        if (OBJ_SYMBOL[`${i}`]) {
          FINNALY_ARR[i] = OBJ_SYMBOL[i]
        } else {
          FINNALY_ARR[i] = RESULT_ARR[j];
          j++;
        }
      }

      return FINNALY_ARR.join('');

    } else if (this.valueStart === false) {    // reverse
      for (let i = 0; i < MESSAGE_ARR.length; i++) {
        let index = TABLE_OBJ[MESSAGE_ARR[i]] + TABLE_OBJ[KEY_ARR[i]];
        if (index >= 26) index -= this.arr.length;
        RESULT_ARR.push(this.arr[index]);
      }

      for (let i = 0, j = 0; i < NEW_MESSAGE.length; i++) {
        if (OBJ_SYMBOL[`${i}`]) {
          FINNALY_ARR[i] = OBJ_SYMBOL[i]
        } else {
          FINNALY_ARR[i] = RESULT_ARR[j];
          j++;
        }
      }

      return FINNALY_ARR.reverse().join('');

    }
  }


  decrypt(encryptedMessage, key) { //расшифровка
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase().replace(/ /g, '');
    key = key.toUpperCase().replace(/ /g, '');

    if (this.valueStart === undefined || this.valueStart === true) {





    } else if (this.valueStart === false) {    // reverse





    }
  }
}


// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);


// console.log(reverseMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'));
// console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'));
// directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey') //PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'
// reverseMachine.encrypt('attack at dawn!', 'alphonse')




module.exports = {
  VigenereCipheringMachine
};
