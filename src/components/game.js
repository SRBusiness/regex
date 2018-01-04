import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PuzzleContainer from './puzzleContainer';

const levels = {
  0: {
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
  1: {
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
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: ''
    }
  }
  render () {
    return (
      <p>I'm a game!</p>
    )
  }
}

export default Game
