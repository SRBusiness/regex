// let arr = [0, 1, 2, 3, 4];
let c = 'otter'
let b = [ 'Wild ', 's on the run ' , ' are so fast']
let text = 'Wild otters are on the run, otters are a very fast species!'
let j = text.split('otter').reduce( (prev, curr, i) => {
  // console.log(`prev: ${prev}`);
  // console.log(`current: ${curr}`);
  // console.log(`i: ${i}`);
  return prev + `<b class='regex-match'>` + c + `</b>`+ curr;
});
console.log(j);
