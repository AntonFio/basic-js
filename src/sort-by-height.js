const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] < 0) {
			arr2.push(NaN)
		} else {
			arr2.push(arr[i])
		}
	}
  let arrResult = arr2.sort((a, b) => a - b)
	let result = [];
	for (let i = 0; i < arrResult.length; i++){
		if (arrResult[i] === NaN) {
			result.push(-1)
		} else {
			result.push(arr[i])
		}
	}
	return result
}

module.exports = {
  sortByHeight
};
