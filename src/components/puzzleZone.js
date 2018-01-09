import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../actions/actionCreators';

// TODO: figure out how react handles white space - the puzzle text "a    bc" renders as "a bc" Charles said look into using a pre-tag
// TODO: refactor this so that it shows all matches, the split function wont should all things for /[of]/, look into seeing if you can use the exec method to loop through all of the matches. Also could check and see if there is a method in any regexp lang that returns all the matches with an index of where they are in the string
// TODO: add a toggle function for the global variable

function regexHighlightGlobal(text, input, value) {
  // console.log(`value: ${value}`);
  let passInClassName;
  if ( !value ) {
    passInClassName = 'highlight-one'
  } else {
    passInClassName = 'highlight-two'
  }

  // don't do anything if there is no input
  if (input === ''){
    return text
  }
  let regex;
  // try and catch statement because bad RegExp's throw and expection
  try {
    regex = new RegExp(input)
  }
  catch(err) {
    console.log(`users regex: '${input} was invalid `);
    return text
  }
  const result = regex.exec(text)
  // when there is a match
  if (result !== null) {
    return (
      text.split(result[0]).reduce( (prev, curr, i) => {
        // console.log(`checking that inside of this function you get the value: ${value}`);
        // console.log(`passInClassName = ${passInClassName}`);
        return prev + `<span class='${passInClassName}'>` + result[0] + `</span>`+ curr
      })
    )
  } else {
    return text
  }
}

class PuzzleZone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRegex: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const userInput = event.target.value;
    this.setState( () => {
      return{
        userRegex: userInput,
      }
    })
  }

  render () {
    const { text, answer, prompt } = this.props.puzzle
    const { userRegex } = this.state;
    return (
      <div className='puzzle'>
        <div className='puzzle-display-container'>
          <div className='puzzle-display'>
            <p className='top'>
              { ReactHtmlParser(regexHighlightGlobal(text, answer, false)) }
            </p>
            <p className='bottom'>
              { ReactHtmlParser(regexHighlightGlobal(text, userRegex, true)) }
            </p>
          </div>
        </div>

        <div>
          <h3>Promt: {prompt}</h3>
        </div>

        <div className='user-input-container'>
          / <input
            id='userInput'
            placeholder='insert regex here'
            type='text'
            value={userRegex}
            autoComplete='off'
            onChange={this.handleChange}
          /> /
        </div>
        <button
          onClick={ () => this.props.incrementLevel() }>
          Next Level
        </button>
      </div>
    )
  }
}

PuzzleZone.propTypes = {
  puzzle: PropTypes.shape({
    text: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    solution: PropTypes.isRequired,
  }).isRequired,
  incrementLevel: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  // console.log('State in puzzleZone', state);
  return {
    level: state.level,
    totalLevels: state.totalLevels,
  };
}

// makes it so we don't have to call this.props.dispatch(levelsActionCreators.changeLevel(level)) instead you can just call this.props.changeLevel(level)
function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PuzzleZone);
