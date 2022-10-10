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
  if (!Array.isArray(members)) return false;
  const NAME_TEAM = members.map(value => {
    if (typeof value === 'string') return value.trim().at(0).toUpperCase();
  })
  const RESULT = NAME_TEAM.sort().join('');
  return RESULT ? RESULT : false;
}

module.exports = {
  createDreamTeam
};