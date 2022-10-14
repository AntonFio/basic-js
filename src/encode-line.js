const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let arr = [];
   let current = 1;
   for (let i = 0; i < str.length; i++) {
      if (str[i] != str[i + 1] ) {
          arr.push([current, str[i]]);
          current = 1;
      } else{
         current++
      }
	}
	
	return arr.flat().filter(item => item !== 1).join('')

}

module.exports = {
  encodeLine
};
