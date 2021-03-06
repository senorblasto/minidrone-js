/**
 * Decimal to hex helper function
 * @param {number} d - input
 * @returns {string} - output
 * @private
 */
function d2h(d) {
  const h = Number(d).toString(16);

  return h.length === 1 ? '0' + h : h;
}

/**
 * Thrown when an invalid command is requested or received
 */
module.exports = class InvalidCommandError extends Error {
  constructor(value, type, target, context = []) {
    let message;

    if (typeof target === 'number') {
      message = 'with the value ' + d2h(target);
    } else {
      message = `called "${target}"`;
    }

    message = `Can't find ${type} ${message}`;

    if (context.length > 0) {
      message += ' (' + context.join(', ') + ')';
    }

    super(message);
  }
};
