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
		if (arr[i] > 0) {
			arr2.push(arr[i])
		}
	}
	let arrQ = arr2.sort((a, b) => (a) - (b))
	console.log(arrQ)
	
	let arrNan = []
	let next = 0
	for (let i = 0; i < arr.length; i++){
		if (arr[i] < 0) {
			arrNan.push(arr[i])
		} else {
			arrNan.push(arrQ[next])
			next++
		}
	}
	return arrNan
}

module.exports = {
  sortByHeight
};
