import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from '../puzzleZone/puzzleZone';
import Instructions from '../instructions/instructions';
import LevelNavigation from '../levelNavigation/levelNavigation';
import Welcome from '../welcome/welcome';
// import RefTable from '../refsheet/refsheet';
import Information from '../information/information';
import styles  from './game.css';

// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load

// functional stateless component
const Game = ({ level, refSheetContent, toggleRef, paragraph, contentObj }) => {
  return (
    <div className={styles.content}>
      <div className={styles.innerContainer}>
        <div className={styles.gameContainer}>
          <div className={styles.leftSide}>
            <Welcome />
            <Instructions
              instructions={level.instructions}
            />
          </div>
          <div className={styles.rightSide}>
            <LevelNavigation />
            <PuzzleZone
              puzzles={level.puzzles}
            />
          </div>
          {/* { toggleRef ? <RefTable refArray={refSheetContent} /> : null } */}
        </div>
      </div>
      <footer className="footer">
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
