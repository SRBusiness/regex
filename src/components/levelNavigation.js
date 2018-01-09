import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../actions/actionCreators';

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
    <nav>
      <div className='level-navigation'>
        <div>
          <span
            className="arrow left"
            onClick={ () => props.decrementLevel()}>
            {'<'}
          </span>
          {props.level} of 3 {levelsArray[-1]}
          <span className="arrow right"
            onClick={ () => props.incrementLevel()}>
            {'>'}
          </span>
        </div>
        <div className='button-container' >
          {levelsArray.map( (level) => {
            return (
              <button
                className="btn"
                key={level}
                onClick={ () =>  props.changeLevel(level)}>
                {level}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

LevelNavigation.propTypes = {
  level: PropTypes.number.isRequired,
  changeLevel: PropTypes.func.isRequired,
  incrementLevel: PropTypes.func.isRequired,
  decrementLevel: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  // console.log('State in levelsNavBar', state);
  return {
    level: state.currentLevelIndex + 1,
    totalLevels: state.levels.length,
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
