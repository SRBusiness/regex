import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../actions/levelsActions';

// creates an ar array of levels that we iterate through in the component below
function makeLevelsArray(num) {
  let levelsArray = [];
  for (let i = 1; i < num + 1; i++) {
    levelsArray.push(i);
  }
  return levelsArray;
};

// make this a stateless functional component
class LevelNavigation extends Component {
  toSpecificLevel(level) {
    this.props.changeLevel(level);
  }

  incOrDecLevel(delta) {
    delta ? this.props.incrementLevel() : this.props.decrementLevel()
  }

  render() {
    const levelsArray = makeLevelsArray(this.props.totalLevels);
    return (
      <nav>
        <div className='level-navigation'>
          <div>
            <span
              className="arrow left"
              onClick={ () => this.incOrDecLevel(false)}>
              &#8249;
            </span>
            {this.props.level} of 3 {levelsArray[-1]}
            <span className="arrow right"
              onClick={ () => this.incOrDecLevel(true)}>
              &#8250;
            </span>
          </div>
          <div className='button-container' >
            {levelsArray.map( (level) => {
              return (
                <button
                  className="btn"
                  key={level}
                  onClick={ () =>  this.toSpecificLevel(level)}>
                  {level}
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }
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
