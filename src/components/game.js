import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelNavigation';
import Welcome from './welcome';


// TODO: if I have been logged out for a while then there is nothing stored in localStorage there for the level doesn't load
class Game extends Component {
  render () {
    const { level } = this.props;
    const { levels } = this.props;

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
}

Game.propTypes = {
  levels: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  // console.log('State in Game', state);
  return {
    level: state.level
  }
}

export default connect(mapStateToProps)(Game);
