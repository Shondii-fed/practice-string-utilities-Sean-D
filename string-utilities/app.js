const strUtils = require('./stringUtils');


console.log(strUtils.toCapitalize('word'));
console.log(strUtils.reverseStr('word'));
console.log(strUtils.isStrInStr('word', 'or'));

console.log(strUtils.toCapitalize(''));
console.log(strUtils.toCapitalize(undefined));
console.log(strUtils.reverseStr(''));
console.log(strUtils.reverseStr(undefined));
console.log(strUtils.isStrInStr('', 'hello'));
console.log(strUtils.isStrInStr(undefined, 'hello'));

