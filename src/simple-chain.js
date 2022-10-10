const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    this.result.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position)) {
      throw new Error('You can\'t remove incorrect link!');
    }

    const arr = [];

    for (let i = 1; i <= this.getLength(); i++) {
      arr.push(i);
    }

    if (!arr.includes(position)) {
      throw new Error('You can\'t remove incorrect link!');
    }

    const post = position - 1;
    this.result = this.result.filter((_, index) => index !== post);
    return this;
  },

  reverseChain() {
    this.result.reverse()
    return this;
  },

  finishChain() {
    return this.result.map(value => `( ${value} )~~`).join('').slice(0, -2);
  }
};


module.exports = {
  chainMaker
};
