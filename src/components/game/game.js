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
        { toggleRef ? <RefTables refArray={refSheetContent} />: null }
        <Information/>
      </footer>
    </div>
  )
}

Game.propTypes = {
  level: PropTypes.object.isRequired,
  refSheetContent: PropTypes.array.isRequired,
  toggleRef: PropTypes.bool.isRequired,
}

function mapStateToProps({ levels, currentLevelIndex, refSheetContent, refSheet, paragraph, contentObj}) {
  return {
    level: levels[currentLevelIndex],
    refSheetContent: refSheetContent,
    toggleRef: refSheet,
    paragraph: paragraph,
    contentObj: contentObj,
  }
}

export default connect(mapStateToProps)(Game);
