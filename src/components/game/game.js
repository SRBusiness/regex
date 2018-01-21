import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from '../puzzleZone/puzzleZone';
import Instructions from '../instructions/instructions';
import LevelNavigation from '../levelNavigation/levelNavigation';
import Welcome from '../welcome/welcome';
import RefTable from '../refsheet/refsheet';
import Information from '../information/information';
import styles  from './game.css';

// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load

// functional stateless component
const Game = ({ level, refSheetContent, toggleRef, paragraph }) => {
  return (
    <div>
      <div className={styles.content}>
        <section className={styles.gameContainer}>
          <div className={styles.leftSide}>
            <Welcome />
            <LevelNavigation />
            <PuzzleZone
              puzzle={level.puzzle}
            />
          </div>
          <div className={styles.rightSide}>
            {/* <Instructions
              instructions={level.instructions}
            /> */}
            <Information/>
            <BuildPara paragraph={paragraph}/>
          </div>
          { toggleRef ? <RefTable refArray={refSheetContent} /> : null }
        </section>
      </div>
      <footer className="footer">
      </footer>
    </div>
  )
}

Game.propTypes = {
  level: PropTypes.object.isRequired,
  refSheetContent: PropTypes.array.isRequired,
  toggleRef: PropTypes.bool.isRequired,
}

function mapStateToProps({ levels, currentLevelIndex, refSheetContent, toggleRefSheet, paragraph}) {
  // console.log('State in Game', state);
  return {
    level: levels[currentLevelIndex],
    refSheetContent: refSheetContent,
    toggleRef: toggleRefSheet,
    paragraph: paragraph,
  }
}

export default connect(mapStateToProps)(Game);


const Paragraph = (props) => {
  return (
    <p className={styles.newline}>
      {props.paragraph.map( (ele) => {
        if (ele[1] === 'meta') {
          return (
            <span className={styles.meta}>
              {ele[0]}
            </span>
          )
        } else if (ele[1] === 'regex') {
          return (
            // <span className={styles.regex}>
              <code className={styles.regex}>{ele[1]}</code>
            // </span>
          )
        } else {
          return (
            ele[0]
          )
        }
      })}
      {console.log(props.paragraph)}
    </p>
  )
}


const BuildContent = ({contentObj}) => {

}

const BuildPara = ({ paragraph }) => (
  <p>
    {paragraph.map(t => {
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
