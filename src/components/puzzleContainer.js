import React from 'react';
import PropTypes from 'prop-types';

const puzzles = {
  0:{
    fact: `<p>Otters love to eat shelled animals, like clams, but <span>otters</span> aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into dinner. While they hunt for food underwater, they’ll often store a rock in the skin under their arms for later use.</p>`,
    prompt: 'Build a Regex that matches the word "rock"',
    answer: 'rock',
  },
  1: {
    fact: 'There are 13 species of Otters, and just about all of them are decreasing.',
    prompt: 'Build a Regex that matches the number "13"',
    answer: '13',
  }
}

class Puzzle extends React.Component {
  render () {
    return (
      <div className='puzzle'>
        {this.props.lesson.fact}
        <p>{this.props.lesson.prompt}</p>
      </div>
    )
  }
}

Puzzle.propTypes = {
  puzzle: PropTypes.shape({
    fact: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
  }).isRequired,
}
// will need state to understand what level and sub level we are on
class PuzzleContainer extends React.Component {
  render() {
    return(
      <div>
        <Puzzle lesson={puzzles[0]} />
      </div>
    )
  }
}

export default PuzzleContainer;
