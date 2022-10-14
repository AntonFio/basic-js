const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
	let str = email.split('@');
	let str2 = str[str. length - 1]
	console.log(str2)
 }

module.exports = {
  getEmailDomain
};
