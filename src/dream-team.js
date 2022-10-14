const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
	if(Array.isArray(members) === false) return false
	if (members === false||members === null||members === undefined || members == Array.isArray(members)) return false
	let arr = Object.values(members);
	console.log(arr)
	// let a = arr.map(item => item.trim().toUpperCase()).map(item => item[0]).sort().join('')
	if (arr.length === 0) {
		return false
	}
	
	let a = arr.filter(item => {
		if (typeof item === 'string') {
			return true;
		}
	})

		return a.map(item => item.trim().toUpperCase()).map(item => item[0]).sort().join('')
}


module.exports = {
  createDreamTeam
};
