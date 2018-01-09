function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

function styleHyphenFormat2(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}


// function highlighter(stringToMatch, userRegEpx) {
//   function addStyleTags(match, offset, string) {
//     return '<b>' + match + '</b>';
//   }
//   return stringToMatch.replace(userRegEpx, addStyleTags);
// }


function highlighter(stringToMatch, input) {
  if (input === ''){
    return stringToMatch
  }
  let regex;
  // try and catch statement because bad RegExp's throw and expection
  try {
    regex = new RegExp(input, 'g')
  }
  catch(err) {
    console.log(`users regex: '${input} was invalid `);
    return stringToMatch
  }

  function addStyleTags(match, offset, string) {
    return '<b>' + match + '</b>';
  }
  return stringToMatch.replace(regex, addStyleTags);
}


console.log(highlighter('While they hunt for food underwater they’ll often store a rock', `[of]`));
