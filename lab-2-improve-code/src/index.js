
module.exports = function greeting(i = 'my friend') {
  let names = i;
  if (typeof i === 'string') {
    names = [i];
  }

  let nStr = '';
  Object.keys(names).forEach((j) => { nStr = nStr + names[j] + ((parseInt(j, 10) + 2 === names.length) ? ', and ' : ((parseInt(j, 10) + 1 === names.length) ? '' : ', ')); });

  if (nStr.toUpperCase() === nStr) return `HELLO ${nStr}!`;

  return `Hello, ${nStr}.`;
};
