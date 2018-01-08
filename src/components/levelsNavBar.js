import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActionCreators from '../actions/levelsActions';

// make this a stateless functional component
class LevelNavigation extends Component {

  changeTheLevelFunction(level) {
    console.log(`inside changeTheLevelFunction function  want to change to level - ${level}`);
    this.props.changeLevel(level);
  }

  incDecLevel(delta) {
    // console.log(`insdie IncDecLevel function`);
    // const { level, totalLevels } = this.props;
    // const nextLevel = delta ? level + 1 : level - 1;
    // if (nextLevel <= totalLevels && nextLevel !== 0 ) {
      delta ? this.props.incrementLevel() : this.props.decrementLevel()
    // }
  }

  render() {
    // TODO: update this to something that is called in state
    const levelsArray = [1,2,3]
    return (
      <nav>
        <div className='level-navigation'>
          <div>
            <span
              className="arrow left"
              onClick={ () => this.incDecLevel(false)}>
              &#8249;
            </span>
            {this.props.level} of 3 {levelsArray[-1]}
            <span className="arrow right"
              onClick={ () => this.incDecLevel(true)}>
              &#8250;
            </span>
          </div>
          <div className='button-container' >
            {levelsArray.map( (level) => {

              return (
                <button
                  className="btn"
                  key={level}
                  onClick={ () =>  this.changeTheLevelFunction(level)}>
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
  levelsArray: PropTypes.array.isRequired,
  changeLevel: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  console.log('State in levelsNavBar', state);
  return {
    level: state.level,
    totalLevels: state.totalLevels,
  }
}

// makes it so we don't have to call this.props.dispatch(levelsActionCreators.changeLevel(level))
// instead you can just call this.props.changeLevel(level)
function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LevelNavigation);
