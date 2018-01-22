import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../../actions/actionCreators';
import SwitchButton from 'lyef-switch-button';
import 'lyef-switch-button/css/main.css';
import styles from './userInputArea.css';

class UserInputArea extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
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
    const { currentExerciseIndex, currentLevelIndex, maxLevel, maxExeCurLvl, userRegex } = this.props

    return (
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
                onChange={(event) => this.props.updateRegex(event.target.value)}
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
    )
  }
}

UserInputArea.propTypes = {
  incrementLevel: PropTypes.func.isRequired,
  toggleGlobalFlag: PropTypes.func.isRequired,
  incrementExercise: PropTypes.func.isRequired,
  previousLevelLastExercise: PropTypes.func.isRequired,
  decrementExercise: PropTypes.func.isRequired,
  currentExerciseIndex: PropTypes.number.isRequired,
  currentLevelIndex: PropTypes.number.isRequired,
  maxLevel: PropTypes.number.isRequired,
  maxExeCurLvl: PropTypes.number.isRequired,
  userRegex: PropTypes.string.isRequired,
}

function mapStateToProps({currentExerciseIndex, levels, currentLevelIndex, userRegex }) {
  return {
    currentExerciseIndex: currentExerciseIndex,
    currentLevelIndex: currentLevelIndex,
    maxLevel: (levels.length - 1),
    maxExeCurLvl: (levels[currentLevelIndex].puzzles.length - 1 ),
    userRegex: userRegex,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInputArea);
