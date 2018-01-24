import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../../actions/actionCreators';
import styles from './levelNavigation.css';
import otterRight from './otterright.png';
import otterLeft from './otterleft.png';

// creates an ar array of levels that we iterate through in the component below
const makeLevelsArray = (num) => {
  let levelsArray = [];
  for (let i = 1; i < num + 1; i++) {
    levelsArray.push(i);
  }
  return levelsArray;
};

// functional stateless component
const LevelNavigation = (props) => {
  const levelsArray = makeLevelsArray(props.totalLevels);
  return (
    <nav className={styles.centeredContainer}>
        <h3>
          Level {props.level} of {props.totalLevels}
        </h3>
        <div className={styles.btnContainer}>
          <span
            className={styles.arrow}
            onClick={ () => props.decrementLevel()}>
            {/* {'< '} */}
            <img className={styles.left} src={otterRight} alt="Otter icon right" />
          </span>
          {levelsArray.map( (level, index) => {
            return (
              <button
                className={ props.currentLevelIndex === index ? styles.curLvlBtn  : styles.lvlBtn }
                key={level}
                onClick={ () =>  props.changeLevel(level)}>
                {level}
              </button>
            )
          })}
          <span className={styles.arrow}
            onClick={ () => props.incrementLevel()}>
            {/* {' >'} */}
            <img className={styles.right} src={otterLeft} alt="Otter icon left" />
          </span>
      </div>

    </nav>
  )
}

LevelNavigation.propTypes = {
  level: PropTypes.number.isRequired,
  changeLevel: PropTypes.func.isRequired,
  incrementLevel: PropTypes.func.isRequired,
  decrementLevel: PropTypes.func.isRequired,
  currentLevelIndex: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  // console.log('State in levelsNavBar', state);
  return {
    level: state.currentLevelIndex + 1,
    totalLevels: state.levels.length,
    currentLevelIndex: state.currentLevelIndex,
  };
}

// makes it so we don't have to call this.props.dispatch(levelsActionCreators.changeLevel(level)) instead you can just call this.props.changeLevel(level)
function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LevelNavigation);
