import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelsNavBar';
import Welcome from './welcome';

class Game extends Component {
  constructor(props) {
    super(props);

    const level = parseInt(localStorage.getItem('currentLevel'), 10);
    this.state = {
      level: level,
      totalLevels: (Object.keys(this.props.levels).length),
    }
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleSingleLevelChange = this.handleSingleLevelChange.bind(this);
  }

  handleLevelChange = (newLevel) => {
    let levelNumber = parseInt(newLevel, 10);
    console.log(`inside handleLevelChange - change to ${newLevel}`);
    this.setState({
      level: levelNumber,
    });
    localStorage.setItem('currentLevel', levelNumber);
  }

  handleSingleLevelChange = (delta) => {
    console.log(`inside handleSingleLevelChange - delta: ${delta}`);
    const { level, totalLevels } = this.state;
    // true = + 1 AND false = -1
    const nextLevel = delta ? level + 1 : level - 1;
    if (nextLevel <= totalLevels && nextLevel !== 0 ) {
      this.handleLevelChange(nextLevel);
    }
  }

  render () {
    const cat = localStorage.getItem('currentLevel');
    console.log(cat);
    const { level } = this.state;
    const { levels } = this.props;
    const levelsArray = Object.keys(levels);

    return (
      <section className='game'>
        <Welcome />
        <LevelNavigation
          levelsArray={levelsArray}
          triggerLevelChange={this.handleLevelChange}
          triggerSingleLevelChange={this.handleSingleLevelChange}
          level={level}
        />
        <Instructions
          instructions={levels[level].instructions}
        />
        <PuzzleZone
          triggerLevelChange={this.handleSingleLevelChange}
          puzzle={levels[level].puzzle}
        />
      </section>
    )
  }
}

Game.propTypes = {
  levels: PropTypes.object.isRequired,
}

export default Game;
