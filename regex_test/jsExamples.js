// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// https://eloquentjavascript.net/09_regexp.html
console.log(/abc/.test('abcde'));

console.log(/abc/.exec('abcde'))

console.log(/abc/.exec('abcdeabc'));


console.log('one two 100'.match(/\d+/));

// [ '100', index: 8, input: 'one two 100' ]
let a  = "99 bottles of beer on the wall 99 bottle of beer"


a.replace(/beer/, 'soda');
// '99 bottles of soda on the wall 99 bottle of beer'
console.log(a);

a.replace(/bottle/g, 'can')
// '99 cans of beer on the wall 99 can of beer'
console.log(a);

var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40
