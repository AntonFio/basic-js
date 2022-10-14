const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 function getSeason(data) {
// 	if (typeof data === 'string') return 'Invalid date!';
// 	if (typeof data === Array.isArray(data)) return 'Invalid date!';
// 	if (typeof data === 'function') return 'Invalid date!';
// 	if (data === undefined) return 'Unable to determine the time of year!';

// let month = data.getMonth();

// if (month > 0 && month <= 3) {
//    return 'winter';
// }
// if (month >= 4 && month <= 6) {
// 	return 'spring'
// } 
// if (month >= 7 && month <= 9){
//    return 'summer'
// } 
// if (month >= 10 && month <=12){
//    return 'autumn'
// }
}

module.exports = {
  getSeason
};
