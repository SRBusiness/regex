import React, { Component } from 'react';
import PropTypes from 'prop-types';

// made this a stateless functional component
const LevelNavigation = ({ level, levelsArray, triggerSingleLevelChange, triggerLevelChange }) => {
  return (
    <nav>
      <div className='level-navigation'>
        <div>
          <span
            className="arrow left"
            onClick={ () => triggerSingleLevelChange(false)}>
            &#8249;
          </span>
          {level} of 3 {levelsArray[-1]}
          <span className="arrow right"
            onClick={ () => triggerSingleLevelChange(true)}>
            &#8250;
          </span>
        </div>
        <div className='button-container' >
          {levelsArray.map( (level) => {
            return (
              <button
                className="btn"
                key={level}
                onClick={ () => triggerLevelChange(level)}>
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
  levelsArray: PropTypes.array.isRequired,
  triggerLevelChange: PropTypes.func.isRequired,
  triggerSingleLevelChange: PropTypes.func.isRequired,
}

export default LevelNavigation;
