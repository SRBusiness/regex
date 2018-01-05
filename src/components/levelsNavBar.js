import React, { Component } from 'react';
import PropTypes from 'prop-types';

function LevelButton() {

}
// TODO: have level buttons with unique keys
// TODO: should this be their own component?




class LevelNavigation extends Component {
  render() {
    return (
      <nav >
        <div className='level-navigation'>
          <div>
            <span className="arrow left">&#8249; </span>
             level 2 of 3
            <span className="arrow right"> &#8250;</span>
          </div>
          <div >
            {
              this.props.levelsArray.map((level) => {
                return (
                  <button
                    className="btn"
                    key={level}>
                    {level}
                  </button>
                )
              })
            }
            individual level buttons should live here, later they will go in a modal
          </div>
        </div>
      </nav>
    )
  }
}

LevelNavigation.propTypes = {
  level: PropTypes.number.isRequired,
  levelsArray: PropTypes.array.isRequired,
  // TODO: add the callback function(s) here
}

export default LevelNavigation;


// while (i < 10) {
//     text += "The number is " + i;
//     i++;
// }
