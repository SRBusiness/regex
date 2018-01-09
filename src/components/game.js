import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelNavigation';
import Welcome from './welcome';


// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load

// This component doesn't really need all the levels, and would become simpler if it just received the current level.
// This can be handled by your mapStateToProps function below.  
// functional stateless component
const Game = ({ level, levels }) => {
  return (
    <section className='game'>
      <Welcome />
      <LevelNavigation />
      <Instructions
        instructions={levels[level].instructions}
      />
      <PuzzleZone
        puzzle={levels[level].puzzle}
      />
    </section>
  )
}

Game.propTypes = {
  levels: PropTypes.object.isRequired,
}

// mapStateToProps receives a second argument `ownProps` which is object containing the props passed to the component
// To return only the current level (rather than just the index) you could do something like:
// function mapStateToProps(state, {levels}) {
//  return { level: levels[state.level] }
// }
// Eventually, you probably will want to move your list of levels into your state, at which point you could update you function:
// function mapStateToProps({levels, currentLevelIndex}) {
//  return { level: levels[currentLevelIndex] }
// }
// By selecting the current level in your mapStateToProps you can completly change where levels are stored,
// and how you determine what the selected level is, and not have to update the component above at all.
function mapStateToProps(state) {
  // console.log('State in Game', state);
  return {
    level: state.level
  }
}

export default connect(mapStateToProps)(Game);
