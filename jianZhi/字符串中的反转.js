/**
 * @param {string} message
 * @return {string}
 */
var reverseMessage = function (message) {
  return message.trim().split(/\s+/).reverse().join(' ')
};