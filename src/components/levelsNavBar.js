import React, { Component } from 'react';
import PropTypes from 'prop-types';

function LevelButton() {

}
// TODO: have level buttons with unique keys
// TODO: should this be their own component?




class LevelNavigation extends Component {


  render() {
    const { level, levelsArray } = this.props
    // const { handleLevelChange } = this.props.triggerLevelChange
    // const { handleSingleLevelChange } = this.props.triggerSingleLevelChange
    // console.log(this.props.triggerSingleLevelChange);
    // console.log(handleLevelChange);
    return (
      <nav >
        <div className='level-navigation'>
          <div>
            <span
              className="arrow left"
              onClick={() => this.props.triggerSingleLevelChange(false)}>
              &#8249;
            </span>
              {level} of 3 {levelsArray[-1]}
            <span className="arrow right"
              onClick={() => this.props.triggerSingleLevelChange(true)}>
               &#8250;
             </span>
          </div>
          <div className='button-container' >
            {
              this.props.levelsArray.map((level) => {
                return (
                  <button
                    className="btn"
                    key={level}
                    onClick={() => this.props.triggerLevelChange(level)}
                    >
                    {level}
                  </button>
                )
              })
            }
          </div>
        </div>
      </nav>
    )
  }
}

LevelNavigation.propTypes = {
  level: PropTypes.number.isRequired,
  levelsArray: PropTypes.array.isRequired,
  // triggerLevelChange: PropTypes.array.isRequired,
  // TODO: add the callback function(s) here
}

export default LevelNavigation;
