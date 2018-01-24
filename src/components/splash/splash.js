import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as levelsActionCreators from '../../actions/actionCreators';
import styles  from './splash.css';

const Splash = (props) => {
  let regex = '`/ <pattern to match> / <flag(s)>`'
  return (
    <div className={styles.splashContainer}>
      <div>
        <h1>You Otter Learn Regex</h1>
        <h3>What are Regular Expressions?</h3>
        <p>
          Regular expressions are search patterns that try to describe, identify, or parse patterns of text. Learning regular expressions can be difficult at first, but they can be powerful tools to simplify your code. Regular expressions are commonly referred to as “regex” or “regexp”.
        </p>
        <p>
          Regular expressions are flexible and powerful ways to match strings that have many useful applications. Common uses of regex include:
          <ul>
            <li>
              Searching for text within a larger text body that matches a pattern - Ex. find all dates in a document
            </li>
            <li>
              Replacing text items - Ex. look through a word doc and replace misspelled word X with correctly spelled word Y
            </li>
            <li>
              Validating that a users input meets certain criteria - Ex. email, password, or phone number validation
            </li>
            <li>
              Reformating text - Ex. split a large block of text into smaller pieces by matching a specific pattern
            </li>
          </ul>
        </p>
        <p>
          Regular expressions are made up of two forward slashes, one at the beginning and one at the end, anything that lives between them forms the pattern we match against text. After the final forward slash you can add optional flags which alter the regex pattern.
        </p>
        <div>
          <p>
            {regex}
          </p>
        </div>
        <p>
          General tips for how to tackle learning regular expressions:
          Split regular expressions down into smaller parts
          Read aloud the steps in your regex and try to be as literal as possible. Ex “‘a’ followed by ‘b’ followed by ‘c’”
          Don’t assume your regex is matching what you want or think, test each piece as you go. If you get stuck try using a visualizer tool to like REGEXPER or Regulex to help you understand exactly what your regex is matching.
        </p>
        <p>
          regexes are widely supported in programming languages, text processing programs, advanced text editors, and many other programs. There are many different flavors of regex each with their own specific nuances in syntax and additional supported properties. This site attempts to keep things simple and only show regex syntax that is universally applicable. For more information about different implementations of regex please see the resources page. 
        </p>
      </div>

      <button
        className={styles.btn}
        onClick={props.switchToGame}>
        Play the Game!
      </button>
    </div>
  )
}

Splash.propTypes = {
  switchToGame: PropTypes.func.isRequired,
}

function mapStateToProps() {
  // console.log('State in Game', state);
  return {
    // level: levels[currentLevelIndex],
    // refSheetContent: refSheetContent,
    // toggleRef: toggleRefSheet,
    // paragraph: paragraph,
    // contentObj: contentObj,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
