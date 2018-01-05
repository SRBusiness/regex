import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelsNavBar';

// const levels = {
//   1: {
//     puzzle: {
//       text: `Otters love to eat shelled animals, like clams, but otters aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into dinner. While they hunt for food underwater, they’ll often store a rock in the skin under their arms for later use.`,
//       prompt: `Build a Regex that matches the word "rock"`,
//       answer: `rock`,
//       hints: `I'm a hint!`,
//       solution: `I'm a solution regexp(/winner/)`,
//       title: `Intro to RegExp`,
//       number: 1,
//     },
//     instructions: {
//       title: 'Intro to regex',
//       number: 1,
//       content: `Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 `,
//       example: `I'm and example /regex/ matches some thing in a string! how cool`,
//     }
//   },
//   2: {
//     puzzle: {
//       text: `There are 13 species of Otters, and just about all of them are decreasing.`,
//       prompt: `Build a Regex that matches the number "13"`,
//       answer: `13`,
//       hints: `I'm a hint!`,
//       solution: `I'm a solution regexp(/winner/)`,
//       title: `More regex`,
//       number: 2,
//     },
//     instructions: {
//       title: `More regex`,
//       number: 2,
//       content: `Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 `,
//       example: `I'm and example /regex/ matches some thing in a string! how cool`,
//     }
//   },
//   3: {
//     puzzle: {
//       text: `Otters sometimes sleep above ground in a ‘couch’ (den). However they predominantly reside in underground ‘holts’. These are chambers dug out of the river bank or cavities under riverside tree roots. They also have their young in the holts.`,
//       prompt: `Build a Regex that matches "river"`,
//       answer: `riverside`,
//       hints: `I'm a hint!`,
//       solution: `I'm a solution regexp(/winner/)`,
//       title: `Matching specific characters`,
//       number: 3,
//     },
//     instructions: {
//       title: `Matching specific characters`,
//       number: 3,
//       content: `Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 `,
//       example: `I'm and example /regex/ matches some thing in a string! how cool`,
//     }
//   },
// }

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 1,
      totalLevels: (Object.keys(this.props.levels).length),
    }

    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleSingleLevelChange = this.handleSingleLevelChange.bind(this);
  }



  handleLevelChange = (newLevel) => {
    // event.preventDefault();
    let levelNumber = parseInt(newLevel, 10);
    console.log(`inside handleLevelChange - change to ${newLevel}`);
    this.setState({
      level: levelNumber,
    });
  }

  handleSingleLevelChange = (delta) => {
    console.log(`inside handleSingleLevelChange - delta: ${delta}`);
    const { level, totalLevels } = this.state;
    // true = + 1 AND false = -1
    const nextLevel = delta ? level + 1 : level - 1;
    if (nextLevel <= totalLevels && nextLevel !== 0 ){
      this.handleLevelChange(nextLevel);
    }
  }

  render () {
    const { level } = this.state;
    const { levels } = this.props
    const levelsArray = Object.keys(levels);
    // const
    // console.log(this.state.totalLevels);

    return (
      <section className='game'>
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

export default Game;
