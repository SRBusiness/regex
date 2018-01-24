import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../../actions/actionCreators';
// import Validator from '../validation';
import SwitchButton from 'lyef-switch-button';
import 'lyef-switch-button/css/main.css';
import styles from './userInputArea.css';

class UserInputArea extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const { puzzles, currentExerciseIndex } = this.props
    const { text, answer } = puzzles[currentExerciseIndex];
    const userRegex = event.target.value
    this.props.updateRegex(userRegex)
    let validation = this.validator(text, answer, userRegex )
    this.props.validateUserRegex(validation);
  }

  makeExecArray = (text, inputAnswer) => {
    let regex;
    if (inputAnswer === '') {
      return false;
    }
    try {
      regex = new RegExp(inputAnswer, 'g');
    }
    catch(err) {
      console.log(`users regex: '${inputAnswer} was invalid `);
      return false;
    }

    let results = [];

    for (var i = 0; i < text.length; ++i) {
      let result = regex.exec(text[i]);
      while (result !== null ) {
        results.push([result[0], result.index]);
        result = regex.exec(text[i]);
      };
    }
    return results;
  }

  isEqual = (compArr, userArr ) => {
    // check to see if they are the same, if they are empty, if they are not the same length
    if (compArr === userArr ) return true;
    if (compArr == null || userArr == null) return false;
    if (compArr.length !== userArr.length) return false;

    // check each element in array to see if they have the same match at the same index
    for (var i = 0; i < compArr.length; ++i) {
      if (compArr[i][0] !== userArr[i][0] || compArr[i][1] !== userArr[i][1]) {
        return false;
      }
    }
    return true;
  };

  validator = (text, answer, userInput) => {
    const answerArr = this.makeExecArray(text, answer);
    const userArr = this.makeExecArray(text, userInput);
    let result;
    if (answerArr === false || userArr === false) {
      return false;
    } else {
      result = this.isEqual(answerArr, userArr);
    }
    return result;
  };

  render () {
    const { currentExerciseIndex, currentLevelIndex, maxLevel, maxExeCurLvl, userRegex, curLvlCorrectRegex, globalFlag } = this.props

    const btnStyle = curLvlCorrectRegex ? styles.btn : styles.btnFalse

    return (
      <div className={styles.userInputWrapper}>
        {currentLevelIndex === 0 && currentExerciseIndex === 0 ? null :
          <button
            className={styles.btnTrue}
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
                className={styles.userInput}
              />
              <span>/</span>
          </div>
        </div>
        <div>
          {/* <SwitchButton
            id="my-button"
            labelLeft="Off"
            labelRight="On"
            isChecked
            action={ () => this.props.toggleGlobalFlag()}
          /> */}
          <form>
            <label>
              <input type="checkbox" value="globalFlag"
                onChange={() => this.props.toggleGlobalFlag()}
                checked={globalFlag}/>
                Global (g)
              </label>
          </form>
        </div>
        {currentLevelIndex === maxLevel && currentExerciseIndex === maxExeCurLvl? null:
          <button
            className={ btnStyle }
            onClick={ this.handleNext }>
            Next
          </button>
        }
      </div>
    )
  }
}

UserInputArea.propTypes = {
  incrementLevel: PropTypes.func.isRequired,
  toggleGlobalFlag: PropTypes.func.isRequired,
  incrementExercise: PropTypes.func.isRequired,
  previousLevelLastExercise: PropTypes.func.isRequired,
  decrementExercise: PropTypes.func.isRequired,
  // toggleRefSheet: PropTypes.func.isRequired,
  currentExerciseIndex: PropTypes.number.isRequired,
  currentLevelIndex: PropTypes.number.isRequired,
  maxLevel: PropTypes.number.isRequired,
  maxExeCurLvl: PropTypes.number.isRequired,
  userRegex: PropTypes.string.isRequired,
  curLvlCorrectRegex: PropTypes.bool.isRequired,
  // puzzles: PropTypes
}

function mapStateToProps({currentExerciseIndex, levels, currentLevelIndex, userRegex, curLvlCorrectRegex, globalFlag }) {
  return {
    currentExerciseIndex: currentExerciseIndex,
    currentLevelIndex: currentLevelIndex,
    maxLevel: (levels.length - 1),
    maxExeCurLvl: (levels[currentLevelIndex].puzzles.length - 1 ),
    userRegex: userRegex,
    curLvlCorrectRegex: curLvlCorrectRegex,
    globalFlag: globalFlag,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInputArea);
