// import { makeRegExp } from '../highlight/highlight';
const puzzle = {
  text: ['Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.'],
  prompt: 'Build a regex pattern using literal characters that matches the text "fur"',
  answer: 'fur',
}

const makeExecArray = (text, inputAnswer) => {
  // let regex = new RegExp(inputAnswer, 'g');
  let regex;
  if (inputAnswer === '') {
    return false;
  }
  try {
    regex = new RegExp(inputAnswer, 'g');
  }
  catch(err) {
    console.log(`users regex: '${inputAnswer} was invalid `);
    return false;
  }

  let results = [];

  for (var i = 0; i < text.length; ++i) {
    let result = regex.exec(text[i]);
    while (result !== null ) {
      results.push([result[0], result.index]);
      result = regex.exec(text[i]);
    };
  }
  return results;
}

console.log(makeExecArray(puzzle.text, puzzle.answer));
console.log(makeExecArray(puzzle.text, ''));

const isEqual = (compArr, userArr ) => {
  // check to see if they are the same, if they are empty, if they are not the same length
  if (compArr === userArr ) return true;
  if (compArr == null || userArr == null) return false;
  if (compArr.length !== userArr.length) return false;

  // check each element in array to see if they have the same match at the same index
  for (var i = 0; i < compArr.length; ++i) {
    if (compArr[i][0] !== userArr[i][0] || compArr[i][1] !== userArr[i][1]) {
      return false;
    }
  }
  return true;
};

function validator(text, answer, userInput) {
  const answerArr = makeExecArray(text, answer);
  const userArr = makeExecArray(text, userInput);
  const result = isEqual(answerArr, userArr);
  return result;
};


//
// console.log(validator(texta,'o773R.CA.MBA.F....','o773R-CA-MBA-F-...' ));
// console.log(makeExecArray(texta,'o773R.CA.MBA.F....'));
// console.log(makeExecArray(texta,'o773R-CA-MBA-F-...'));
