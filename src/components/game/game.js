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
            <Paragraph paragraph={paragraph}/>
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

const BuildPara = ({ tokens }) => (
  <div>
    {tokens.map(t => {
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
  </div>
)
//
// const tokens = [{
//   text: 'Text before a ',
//   type: PLAIN
// }, {
//   text: 'bold thing',
//   type: BOLD
// }, {
//   text: ' and then some more text leading up to a '
//   // You can leave off the type: PLAIN
// }, {
//   text: 'different thing',
//   type: ITALIC
// }, {
//   text: '. Then maybe an '
// }, {
//   text: 'underlined thing',
//   type: UNDERLINE
// }, {
//   text: '. The possibilities are '
// }, {
//   text: 'Endless!',
//   type: SPECIAL
// }]
