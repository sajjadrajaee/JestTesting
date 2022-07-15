const reverseString = (str) => {
  const split = str.split('');
  const reverse = split.reverse();
  const join = reverse.join('');
  return join;
}

module.exports = reverseString;