import React from 'react';
import PropTypes from 'prop-types';
import styles from './instructions.css'

// Functional stateless component
const Instructions = (props) => {
  const { title, number, content, example } = props.instructions;
  return(
    <div className={styles.instructionsContainer }>
      <h3>Level # {number} - {title}</h3>
      <p>{content}</p>
      <p>{example}</p>
    </div>
  )
}

// const Paragraph = (props) => {
//     <p>
//       {paraArray.map( (ele) => {
//         if (ele[0] != 'text') {
//           return (
//             <span className={styles.ele[0]}>
//               {ele[1]}
//             </span>
//           )
//         }
//       })}
//     </p>
// }

// paragraph = {
//   text: 'An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the ',
//   meta:	'\ (backslash) ',
//   text:	'character. Did you know that a group of otters is called a romp, bevy, or a raft?  For example the regex we would ',
//   regex:	'/romp\./ ',
//   text:	'which would match “romp.”  If we forgot the backslash ',
//   regex: '/romp./ ',
//   text:	'the dot would still have its special meaning and would match the text “romp” plus any character.'
// }

// para = [
//   ['text', 'An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the '],
//   ['meta','\ (backslash) '],
//   ['text', 'character. Did you know that a group of otters is called a romp, bevy, or a raft?  For example the regex we would ' ],
//   ['regex', '/romp\./'],
//   ['text','which would match “romp.”  If we forgot the backslash ' ],
//   ['regex', '/romp./'],
//   ['text', 'the dot would still have its special meaning and would match the text “romp” plus any character.'],
// ]



Instructions.propTypes = {
  instructions: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
  }).isRequired
}

export default Instructions;
