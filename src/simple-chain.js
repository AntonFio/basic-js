const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  startChain: [],
  getLength() {
     return this.startChain.length
     
  },
  addLink(value) {
     this.startChain.push(`( ${ value } )`)
     return this
  },
  removeLink(position) {
     if (typeof(position-1) !== 'number'|| !this.startChain[position - 1]) {
        this.startChain = []
        throw new Error("You can't remove incorrect link!");
     }else {
        this.startChain.splice(position - 1, 1)
        return this
     }
  },
  reverseChain() {
     this.startChain.reverse()
     return this
  },
  finishChain() {
     let result = this.startChain.join('~~');
     this.startChain = [];
     return result
  }
};

module.exports = {
  chainMaker
};
