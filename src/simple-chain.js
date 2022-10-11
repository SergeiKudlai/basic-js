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
      try {
        this.result = this.result.length = 0;
        throw errors;
      } catch (error) {
        return this;
      }
    }

    const arr = [];

    for (let i = 1; i <= this.getLength(); i++) {
      arr.push(i);
    }

    if (!arr.includes(position)) {
      try {
        this.result = this.result.length = 0;
        throw errors;
      } catch (error) {
        return this;
      }
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
    if (this.result) {
      return this.result.map(value => `( ${value} )~~`).join('').slice(0, -2);
    } else {
      return `${this.result}`;
    }
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(1).finishChain());

module.exports = {
  chainMaker
};
