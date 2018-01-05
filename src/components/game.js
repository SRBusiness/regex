import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PuzzleZone from './puzzleZone';
import Instructions from './instructions';
import LevelNavigation from './levelsNavBar';

const levels = {
  1: {
    puzzle: {
      text: `Otters love to eat shelled animals, like clams, but otters aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into dinner. While they hunt for food underwater, they’ll often store a rock in the skin under their arms for later use.`,
      prompt: `Build a Regex that matches the word "rock"`,
      answer: `rock`,
      hints: `I'm a hint!`,
      solution: `I'm a solution regexp(/winner/)`,
      title: `Intro to RegExp`,
      number: 1,
    },
    instructions: {
      title: 'Intro to regex',
      number: 1,
      content: `Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 `,
      example: `I'm and example /regex/ matches some thing in a string! how cool`,
    }
  },
  2: {
    puzzle: {
      text: `There are 13 species of Otters, and just about all of them are decreasing.`,
      prompt: `Build a Regex that matches the number "13"`,
      answer: `13`,
      hints: `I'm a hint!`,
      solution: `I'm a solution regexp(/winner/)`,
      title: `More regex`,
      number: 2,
    },
    instructions: {
      title: `More regex`,
      number: 2,
      content: `Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 `,
      example: `I'm and example /regex/ matches some thing in a string! how cool`,
    }
  },
  3: {
    puzzle: {
      text: `Otters sometimes sleep above ground in a ‘couch’ (den). However they predominantly reside in underground ‘holts’. These are chambers dug out of the river bank or cavities under riverside tree roots. They also have their young in the holts.`,
      prompt: `Build a Regex that matches "river"`,
      answer: `riverside`,
      hints: `I'm a hint!`,
      solution: `I'm a solution regexp(/winner/)`,
      title: `Matching specific characters`,
      number: 3,
    },
    instructions: {
      title: `Matching specific characters`,
      number: 3,
      content: `Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 `,
      example: `I'm and example /regex/ matches some thing in a string! how cool`,
    }
  },
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 1,
      totalLevels: (Object.keys(levels).length),
    }

    this.handleLevelChange = this.handleLevelChange.bind(this);
  }

  handleLevelChange() {
    const { level, totalLevels } = this.state;
    console.log(`level change button has been clicked!`);
    // if changing the level by one will not exceed the number of levels increment level by one
    if (level + 1 <= totalLevels ) {
      this.setState({
        level: this.state.level + 1
      });
    }
  }

  render () {
    const { level } = this.state;
    const levelsArray = Object.keys(levels);
    // const
    // console.log(this.state.totalLevels);

    return (
      <section className='game'>
        <LevelNavigation
          levelsArray={levelsArray}
        />
        <Instructions
          // triggerLevelChange={this.handleLevelChange}
          instructions={levels[level].instructions}
        />
        <PuzzleZone
          triggerLevelChange={this.handleLevelChange}
          puzzle={levels[level].puzzle}
        />
      </section>
    )
  }
}

export default Game;
