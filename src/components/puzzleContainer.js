import React from 'react';
import PropTypes from 'prop-types';
// html parser for react so that I can have the facts be strings that include the html of what should be highlighted
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {regexHighlight } from './highlight';




const puzzles = {
  0:{
    fact: `Otters love to eat shelled animals, like clams, but <b class='highlight'>otters</b> aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into dinner. While they hunt for food underwater, they’ll often store a rock in the skin under their arms for later use.`,
    prompt: 'Build a Regex that matches the word "rock"',
    answer: 'rock',
  },
  1: {
    fact: `There are <b class='highlight'>13</b> species of Otters, and just about all of them are decreasing.`,
    prompt: 'Build a Regex that matches the number "13"',
    answer: '13',
  }
}


// class HtmlComponent extends React.Component {
//   render() {
//     const html = '<div>Example HTML string</div>';
//     return <div>{ ReactHtmlParser(html) }</div>;
//   }
// }
class Puzzle extends React.Component {
  render () {
    const fact = this.props.lesson.fact
    return (
      <div className='puzzle'>
        {ReactHtmlParser(fact)}
        <p>{this.props.lesson.prompt}</p>
        <p>
          <em>O<b>tter</em></b>

        </p>
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

class userInput extends React.Component {

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
