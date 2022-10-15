const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
	if (arr === null) return "'arr' parameter must be an instance of the Array!";
	if (arr === undefined) return "'arr' parameter must be an instance of the Array!";
	if (arr.length === 0) return [];
	if (Array.isArray(arr) !== 'object') return "'arr' parameter must be an instance of the Array!";
	if(typeof arr ===  'number' ||typeof arr ===  false) return "'arr' parameter must be an instance of the Array!"
	let arr2 =[]
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === '--discard-next') {
			delete arr[i + 1]
		} else if (arr[i] === '--discard-prev') {
			delete arr2[i-1]
		}else if (arr[i] === '--double-next') {
			arr2.push(arr[i + 1])
		}else if (arr[i] === '--double-prev') {
			arr2.push(arr[i-1])
		} else {
			arr2.push(arr[i])
		}
	}

return arr2.filter(item => item >0)
 }


module.exports = {
  transform
};
