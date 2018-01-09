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
  function toSpecificLevel(level) {
    props.changeLevel(level);
  }

  function incOrDecLevel(delta) {
    delta ? props.incrementLevel() : props.decrementLevel()
  }

  const levelsArray = makeLevelsArray(props.totalLevels);

  return (
    <nav>
      <div className='level-navigation'>
        <div>
          <span
            className="arrow left"
            // This could be just onClick={props.decrementLevel}
            onClick={ () => incOrDecLevel(false)}>
            &#8249;
          </span>
          
          {props.level} of 3 {levelsArray[-1]}
          <span className="arrow right"
            onClick={ () => incOrDecLevel(true)}>
            {/* &#8250; */}
            {/* Rather than using &#8250; you can just use a string with the character*/}
            {'›'}
          </span>
        </div>
        <div className='button-container' >
          {levelsArray.map( (level) => {
            return (
              <button
                className="btn"
                key={level}
                // this could be: onClick={ () => props.changeLevel(level)} 
                onClick={ () =>  toSpecificLevel(level)}>
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

// If you move levels into state, and turn it into an array (explained in another comment)
// you wont have to explicitly track totalLevels in your state and can do something like:
// totalLevels: state.levels.length
function mapStateToProps(state) {
  // console.log('State in levelsNavBar', state);
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
)(LevelNavigation);
