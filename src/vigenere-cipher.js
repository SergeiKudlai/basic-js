// const { NotImplementedError } = require('../extensions/index.js');

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
    this.latinic = /^[a-z\s]+$/i;
    this.arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }


  encrypt(message, key) { //зашифровка
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    message = message.toUpperCase().replace(/ /g, '');
    key = key.toUpperCase().replace(/ /g, '');

    const MESSAGE_ARR = [...'' + message];
    const KEY_ARR = Array(message.length).fill(key);

    if (this.valueStart === undefined || this.valueStart === true) {





      console.log(MESSAGE_ARR);
      console.log(KEY_ARR);



    } else if (this.valueStart === false) {    // reverse





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


const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);


directMachine.encrypt('attack at dawn!', 'alphonse')
reverseMachine.encrypt('attack at dawn!', 'alphonse')




module.exports = {
  VigenereCipheringMachine
};
