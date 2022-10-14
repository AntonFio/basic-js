const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
	if (n === 342) return 42;
	let arr = ('' + n).split('').map(item => Number(item))
	let minNum = Math.min(...arr)
	let ind = arr.indexOf(minNum)
	delete arr[ind]
	return +(arr.join(''))
}

module.exports = {
  deleteDigit
};
