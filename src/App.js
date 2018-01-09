import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Game from './components/game';

class App extends Component {
  render() {
    // This could be an array, but you would need to change `level` in you store to be 0 indexed.
    // Arrays can be used exactly like objects with sequential numberic keys starting with 0.
    // The benifit of using an array is that it tracks its length automatically, and is easier to read and write
    // const array = ['a', 'b', 'c']
    // const object = {0: 'a', 1: 'b', 2: 'c'}
    // array[0] === object[0]
    // array.length === 3
    // object.length === undefined
    // If you make this change, you would not need to have totalLevels in your state since you can just use levels.length
    /*
    const levels = [
      {
        puzzle: {
          ...
        },
        instructions: {
          ...
        }
      },
      {
        ...
      },
    ]
    */
    const levels = {
      1: {
        puzzle: {
          text: `Otters love to eat shelled animals, like clams, but otters aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into food. While they hunt for food underwater they’ll often store a rock in the skin under their arms for later use.`,
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
    return (
      <section className='container'>
        <Game
          levels={levels}/>
      </section>
    );
  }
}

// It looks like your not using these properties in this component.
// Generally when using redux you only want to "connect" components if they directly
// use state from your store.  Child components can be hooked up to the store and
// access data even if their parents are not "connected"
// tells us what part of the store our specific components needs
function mapStateToProps(state) {
  // console.log('State', state);
  return {
    level: state.level,
    totalLevels: state.totalLevels,
  }
}

App.propTypes = {
  level: PropTypes.number.isRequired,
  totalLevels: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(App)
