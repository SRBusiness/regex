import initialState from '../reducers/initialState';

const makeExecArray = (text, inputAnswer) => {
  let regex = new RegExp(inputAnswer, 'g');
  let results = [];
  let result = regex.exec(text);

  while (result !== null ) {
    results.push([result[0], result.index]);
    result = regex.exec(text);
  };
  return results;
}

const isEqual = (compArr, userArr ) => {
  // check to see if they are the same, if they are empty, if they are not the same length
  if (compArr === userArr ) return true;
  if (compArr == null || userArr == null) return false;
  if (compArr.length != userArr.length) return false;

  // check each element in array to see if they have the same match at the same index
  for (var i = 0; i < compArr.length; ++i) {
    if (compArr[i][0] !== userArr[i][0] || compArr[i][1] !== userArr[i][1]) {
      return false;
    }
  }
  return true;
};

const validator = (text, answer, userInput) => {
  const answerArr = makeExecArray(text, answer);
  const userArr = makeExecArray(text, userInput);
  const result = isEqual(answerArr, userArr);
  return result;
};
