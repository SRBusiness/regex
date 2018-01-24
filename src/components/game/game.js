import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from '../puzzleZone/puzzleZone';
import Instructions from '../instructions/instructions';
import LevelNavigation from '../levelNavigation/levelNavigation';
import OtterFact from '../otterFact/otterFact';
import RefTables from '../refsheet/refsheet';
import Information from '../information/information';
import styles  from './game.css';

// functional stateless component
const Game = ({ level, refSheetContent, toggleRef, paragraph, contentObj }) => {
  return (
    <div className={styles.content}>
      <div className={styles.innerContainer}>
        <div className={styles.gameContainer}>
          <div className={styles.leftSide}>
            <div className={styles.centeredContainer}>
              <h1>You Otter Learn Regex</h1>
            </div>
            <OtterFact fact={level.fact} />
            <LevelNavigation />
            <Instructions
              instructions={level.instructions}
            />
          </div>
          <div className={styles.rightSide}>

            <PuzzleZone
              puzzles={level.puzzles}
            />
          </div>

        </div>
      </div>

      <footer className="footer">
        { toggleRef ? <RefTables refArray={refSheetContent} /> : null }
        <Information/>
        {/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
      </footer>
    </div>
  )
}

Game.propTypes = {
  level: PropTypes.object.isRequired,
  refSheetContent: PropTypes.array.isRequired,
  toggleRef: PropTypes.bool.isRequired,
}

function mapStateToProps({ levels, currentLevelIndex, refSheetContent, toggleRefSheet, paragraph, contentObj}) {
  // console.log('State in Game', state);
  return {
    level: levels[currentLevelIndex],
    refSheetContent: refSheetContent,
    toggleRef: toggleRefSheet,
    paragraph: paragraph,
    contentObj: contentObj,
  }
}

export default connect(mapStateToProps)(Game);
