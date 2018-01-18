import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from '../puzzleZone/puzzleZone';
import Instructions from '../instructions/instructions';
import LevelNavigation from '../levelNavigation/levelNavigation';
import Welcome from '../welcome/welcome';
import RefTables from '../refsheet/refsheet';

// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load

// functional stateless component
const Game = ({ level, refSheetContent, toggleRef }) => {
  return (
    <section className='game'>
      <Welcome />
      <LevelNavigation />
      <Instructions
        instructions={level.instructions}
      />
      <PuzzleZone
        puzzle={level.puzzle}
      />
      { toggleRef ? <RefTables refArray={refSheetContent} /> : null }
    </section>
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
