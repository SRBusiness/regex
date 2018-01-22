import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './instructions.css'

// Functional stateless component
const Instructions = (props) => {
  const { title, number, content, example } = props.instructions;
  return(
    <div className={styles.instructionsContainer }>
      <h3>Level # {number} - {title}</h3>
      <div className={styles.scrollWrapper}>
        {content.map( type => {
          return (
            <BuildParagraph
              content={type}
            />
          )
        })}
      </div>
    </div>
  )
}

const BuildParagraph = ({ content }) => (
  <p>
    {content.map(t => {
      switch(t.type) {
        case 'BOLD':
          return <b>{t.text}</b>
        case 'ITALIC':
          return <i>{t.text}</i>
        case 'UNDERLINE':
          return <u>{t.text}</u>
        case 'META':
          return (
            <span className={styles.meta}>{t.text}</span>
          )
        case 'REGEX':
          return (
            <span className={styles.regex}>{t.text}</span>
          )
        case 'PLAIN':
        default:
          return <span>{t.text}</span>
      }
    })}
  </p>
)

Instructions.propTypes = {
  instructions: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
  }).isRequired
}

export default Instructions;


const BuildContent = ({contentObj}) => {
  return(
    <div>
      {contentObj.map( p => {
        return (
          <BuildParagraph
            paragraph={p}
          />
        )
      })}
    </div>
  )
}
const LessonLvl1 = [
  [
    {
      text: 'Regular expressions are made up of two different types of characters. Normal text characters like the letter “a”  or the number  “1” are called ',
    }, {
      text: 'literals',
      type: 'BOLD',
    }, {
      text: ', while special characters are called ',
    }, {
      text: 'metacharacters',
      type: 'BOLD',
    }, {
      text: '. Don’t worry about metacharacters for now, we will go over them slowly as we progress.',
    }
  ], [
    {
      text: 'For example the regex ',
    }, {
      text: '/art/',
      type: 'REGEX',
    }, {
      text: ' will look for the first time the letters a-r-t appear in a row. This could match the “'
    }, {
      text: 'art',
      type: 'UNDERLINE'
    }, {
      text: '”, “st'
    }, {
      text: 'art',
      type: 'UNDERLINE'
    }, {
      text: 'ing”, or “',
    }, {
      text: 'art',
      type: 'UNDERLINE'
    }, {
      text: 'isan” but would not match “Artifact” because regex’s, by default, are case sensitive unless you tell them to act otherwise with a flag.',
    },
  ], [
    {
      text: 'Speaking of flags there is one flag worth introducing now. The default behavior for a regular expression is that it will look through the text, character by character, and stop once it finds the first occurance of a match. When we want to search for all possible matches not just the first we will add the ',
    }, {
      text: 'g (global search)',
      type: 'META'
    }, {
      text: ', flag to the end of our regex that indicates that the regular expression should be tested against all possible matches in a string. You can use the slider button to toggle the '
    }, {
      text: 'g (global search)',
      type: 'META'
    }, {
      text: ' flag on an off.'
    },
  ],
]

const tokens = [
  {
    text: 'Text before a ',
    type: 'PLAIN'
  }, {
    text: 'bold thing',
    type: 'BOLD'
  }, {
    text: ' and then some more text leading up to a '
  }, {
    text: 'different thing',
    type: 'ITALIC',
  }, {
    text: '. Then maybe an ',
  }, {
    text: 'underlined thing',
    type: 'UNDERLINE',
  }, {
    text: '. The possibilities are ',
  }, {
    text: 'Endless!',
    type: 'SPECIAL',
  },
]
