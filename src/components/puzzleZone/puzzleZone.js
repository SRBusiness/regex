import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../../actions/actionCreators';
import 'lyef-switch-button/css/main.css';
import styles from './puzzleZone.css';
import highlighter from '../highlight/highlight';
import UserInputArea from '../userInputArea/userInputArea';

// const SwitchButton = require('react-switch-button');
// import 'react-switch-button/dist/react-switch-button.css';

// TODO: figure out how react handles white space - the puzzle text "a    bc" renders as "a bc" Charles said look into using a pre-tag
// TODO: refactor this so that it shows all matches, the split function wont should all things for /[of]/, look into seeing if you can use the exec method to loop through all of the matches. Also could check and see if there is a method in any regexp lang that returns all the matches with an index of where they are in the string
// TODO: add a toggle function for the global variable
// TODO: make user input its own component
// TODO: make this a functional component

class PuzzleZone extends Component {
  render () {
    const { globalFlag, currentExerciseIndex, puzzles, userRegex } = this.props
    const { text, answer, prompt } = puzzles[currentExerciseIndex];
    const ExePerLvl = puzzles.length

    return (
      <div className={styles.container}>
        <h3>Exercise {currentExerciseIndex + 1} of {ExePerLvl}</h3>
        <h3>Text:</h3>
        <div className={styles.displayContainer}>
          <div className={styles.puzzleDisplay}>
            <p className={styles.top}>
              { text.map( (t, key) => {
                return (
                  <span key={key}>
                  {ReactHtmlParser(highlighter(t, answer, false, true))}<br/></span>
                )
              })}
            </p>
            <p className={styles.bottom}>
              { text.map( (t, key) => {
                return(
                  <span key={key}>
                  {ReactHtmlParser(highlighter(t, userRegex, true, globalFlag))}<br/></span>
                )
              })}
            </p>
          </div>
        </div>
        <div>
          <p className={styles.prompt}>Prompt: {prompt}</p>
        </div>
        <UserInputArea puzzles={puzzles}/>
        <div className={styles.centeredContainer}>
          <button
            className={styles.btn}
            onClick={ () => this.props.toggleRefSheet() }>
            Toggle Ref Sheet
          </button>
        </div>
      </div>
    )
  }
}

// TODO: go back and make sure prop types are correct
PuzzleZone.propTypes = {
  puzzles: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.array.isRequired,
     prompt: PropTypes.string.isRequired,
     answer: PropTypes.string.isRequired,
   })).isRequired,
  userRegex: PropTypes.string.isRequired,
  currentExerciseIndex: PropTypes.number.isRequired,
  globalFlag: PropTypes.bool.isRequired,
}

function mapStateToProps({ globalFlag, currentExerciseIndex, userRegex }) {
  return {
    globalFlag: globalFlag,
    currentExerciseIndex: currentExerciseIndex,
    userRegex: userRegex,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PuzzleZone);
