import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelNavigation';
import Welcome from './welcome';


// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load

// functional stateless component
const Game = ({ level }) => {
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
    </section>
  )
}

Game.propTypes = {
  level: PropTypes.object.isRequired,
}

function mapStateToProps({levels, currentLevelIndex}) {
  // console.log('State in Game', state);
  return {
    level: levels[currentLevelIndex],
  }
}

export default connect(mapStateToProps)(Game);
