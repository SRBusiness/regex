import styles from './highlight.css';

export function makeRegExp(input, value) {
  try {
    return value ? new RegExp(input, 'g') : new RegExp(input);
  }
  catch(err) {
    console.log(`users regex: '${input} was invalid `);
    return false;
  }
}

function highlighter(stringToMatch, input, value, globalFlag) {
  if (input === ''){
    return stringToMatch
  }

  function addStyleTags(match, offset, string) {
    return `<span class='${styleToAdd}'>` + match + `</span>`;
  }

  const regExp = makeRegExp(input, globalFlag);

  let styleToAdd = !value ? styles.highlightOne : styles.highlightTwo;

  return regExp ? stringToMatch.replace(regExp, addStyleTags) : stringToMatch;
}

export default highlighter;
