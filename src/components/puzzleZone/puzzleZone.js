import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../../actions/actionCreators';
import SwitchButton from 'lyef-switch-button';
import 'lyef-switch-button/css/main.css';
import styles from './puzzleZone.css';
import highlighter from '../highlight/highlight';

// const SwitchButton = require('react-switch-button');
// import 'react-switch-button/dist/react-switch-button.css';

// TODO: figure out how react handles white space - the puzzle text "a    bc" renders as "a bc" Charles said look into using a pre-tag
// TODO: refactor this so that it shows all matches, the split function wont should all things for /[of]/, look into seeing if you can use the exec method to loop through all of the matches. Also could check and see if there is a method in any regexp lang that returns all the matches with an index of where they are in the string
// TODO: add a toggle function for the global variable
// TODO: make user input its own component
class PuzzleZone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRegex: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleChange(event) {
    const userInput = event.target.value;
    this.setState( () => {
      return{
        userRegex: userInput,
      }
    })
  }

  handleNext() {
    const {currentExerciseIndex, currentLevelIndex, maxLevel, maxExeCurLvl } = this.props

    if (currentExerciseIndex === maxExeCurLvl && currentLevelIndex !== maxLevel ) {
      this.props.incrementLevel()
    } else {
      this.props.incrementExercise()
    }
  }

  handlePrev() {
    const {currentExerciseIndex, currentLevelIndex } = this.props

    if (currentExerciseIndex === 0 && currentLevelIndex !== 0){
      this.props.previousLevelLastExercise();
    } else {
      this.props.decrementExercise();
    }
  }

  render () {
    const { globalFlag, currentExerciseIndex, currentLevelIndex, puzzles, maxLevel, maxExeCurLvl } = this.props
    const { text, answer, prompt } = puzzles[currentExerciseIndex];
    const ExePerLvl = puzzles.length
    const { userRegex } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.displayContainer}>
          <p>Exercise {currentExerciseIndex + 1} of {ExePerLvl}</p>
          <div className={styles.puzzleDisplay}>
            <p className={styles.top}>
              { ReactHtmlParser(highlighter(text, answer, false, globalFlag)) }
            </p>
            <p className={styles.bottom}>
              { ReactHtmlParser(highlighter(text, userRegex, true, globalFlag)) }
            </p>
          </div>
        </div>
        <div>
          <p>Promt: {prompt}</p>
        </div>
        <div className={styles.userInputWrapper}>
          {currentLevelIndex === 0 && currentExerciseIndex === 0 ? null :
            <button
              className={styles.btn}
              onClick={this.handlePrev}>
              Previous
            </button>
          }
          <div className={styles.subWrapper}>
            <label>Your Regex:</label>
            <div>
              <span>/</span>
                <input
                  id='userInput'
                  placeholder='insert regex here'
                  type='text'
                  value={userRegex}
                  autoComplete='off'
                  onChange={this.handleChange}
                  size='40'
                />
                <span>/</span>
            </div>
          </div>
          <div>
            <SwitchButton
              id="my-button"
              labelLeft="Off"
              labelRight="On"
              isChecked
              action={ () => this.props.toggleGlobalFlag()}
            />
          </div>
          {currentLevelIndex === maxLevel && currentExerciseIndex === maxExeCurLvl? null:
            <button
              className={styles.btn}
              onClick={ this.handleNext }>
              Next
            </button>
          }
        </div>
      </div>
    )
  }
}

PuzzleZone.propTypes = {
  // puzzles: PropTypes.array.shape({
  //   text: PropTypes.string.isRequired,
  //   prompt: PropTypes.string.isRequired,
  //   solution: PropTypes.isRequired,
  // }).isRequired,
  incrementLevel: PropTypes.func.isRequired,
  toggleGlobalFlag: PropTypes.func.isRequired,
  globalFlag: PropTypes.bool.isRequired,
}

function mapStateToProps({ globalFlag, currentExerciseIndex, levels,currentLevelIndex }) {
  return {
    globalFlag: globalFlag,
    currentExerciseIndex: currentExerciseIndex,
    currentLevelIndex: currentLevelIndex,
    maxLevel: (levels.length - 1),
    maxExeCurLvl: (levels[currentLevelIndex].puzzles.length - 1 )
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PuzzleZone);
