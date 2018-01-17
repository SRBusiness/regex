import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelNavigation';
import Welcome from './welcome';
import RefTable from './refsheet';

// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load

// functional stateless component
const Game = ({ level, refSheet }) => {
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
      <RefTable
        refArray={refSheet}
      />
    </section>
  )
}

Game.propTypes = {
  level: PropTypes.object.isRequired,
  refSheet: PropTypes.array.isRequired,
}

function mapStateToProps({levels, currentLevelIndex, refSheet}) {
  // console.log('State in Game', state);
  return {
    level: levels[currentLevelIndex],
    refSheet: refSheet,
  }
}

export default connect(mapStateToProps)(Game);
