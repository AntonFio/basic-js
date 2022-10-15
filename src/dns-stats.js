const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
	console.log(domains)
	let result = {};
	let arr = domains.map(item => item = [item])
	console.log(arr.map(item => item.join(' ').split('.')))
	let arr2 = arr.reduce((curr, next) => curr.concat(next))
	let str = ''
	for (let i = 0; i < arr2.length; i++) {
		str += arr2[i] + '.'
	}
	let str2 = str.split('.').filter(item => item !== '')
	
   
	for (let i = 0; i < str2.length; i++) {
		let current = str2[i]
		if (result[current]) {
			result[current]++
		} else {
			result[current] = 1
		}
	}
	return result
}

module.exports = {
  getDNSStats
};
