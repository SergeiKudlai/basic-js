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
    const errors = new Error("You can't remove incorrect link!");

    if (typeof position !== 'number' || !Number.isInteger(position)) {
      this.result = [];
      throw errors;
    }

    const arr = [];

    for (let i = 1; i <= this.getLength(); i++) {
      arr.push(i);
    }

    if (!arr.includes(position)) {
      this.result = [];
      throw errors;
    }

    const post = position - 1;
    this.result = this.result.filter((_, index) => index !== post);
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    const answer = this.result.map(value => `( ${value} )~~`).join('').slice(0, -2);
    this.result = [];
    return answer;
  }
};

module.exports = {
  chainMaker
};
