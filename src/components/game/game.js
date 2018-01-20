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
const Game = ({ level, refSheetContent, toggleRef }) => {
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
            <Instructions
              instructions={level.instructions}
            />
            <Information/>
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

function mapStateToProps({ levels, currentLevelIndex, refSheetContent, toggleRefSheet }) {
  // console.log('State in Game', state);
  return {
    level: levels[currentLevelIndex],
    refSheetContent: refSheetContent,
    toggleRef: toggleRefSheet,
  }
}

export default connect(mapStateToProps)(Game);
