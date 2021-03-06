import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as levelsActionCreators from '../../actions/actionCreators';
import styles  from './splash.css';
import otterHead from './otterhead1.png';
import otterRight from './otterright.png';
import otterLeft from './otterleft.png';

const Splash = (props) => {
  return (
    <div className={styles.splashContainer}>
      <div>
        <div className={styles.clear}>
          <img src={otterHead} alt="Otter head" />
          <h1> You Otter Learn Regex</h1>
        </div>
        <p>Welcome to You Otter Learn Regex, an otter themed game to help introduce and teach regular expressions.</p>
        <div className={styles.wrapper}>
          <img className={styles.left} src={otterRight} alt="Otter icon right" />
          <h2>What are Regular Expressions?</h2>
          <img className={styles.right} src={otterLeft} alt="Otter icon left" />
        </div>
        <p>
          Regular expressions, commonly referred to as “regex” or “regexp”, are search patterns that try to describe or parse patterns of text.
          Regular expressions are flexible and powerful ways to match strings that have many useful applications. Common uses of regex include searcing for text, replacing text, and validating a user input.
        </p>
        <div className={styles.wrapper}>
          <img className={styles.left} src={otterRight} alt="Otter icon right" />
          <h2>How to Regex</h2>
          <img className={styles.right} src={otterLeft} alt="Otter icon left" />
        </div>
        <p>
          Regular expressions are made up of two forward slashes, one at the beginning and one at the end. Anything that lives between the forward slashes forms the pattern we use match against text. After the final forward slash you can add optional flags which alter the regex pattern.
        </p>
        <div className={styles.regex}>
          <div className={styles.subWrapper}>
            <p> <span className={styles.slash}>/</span> <span className={styles.pattern}>pattern to match</span> <span className={styles.slash}>/</span> <span className={styles.flag}>flag(s)</span> </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.left} src={otterRight} alt="Otter icon right" />
          <h2>Tips for Learning Regex</h2>
          <img className={styles.right} src={otterLeft} alt="Otter icon left" />
        </div>
        <ul>
          <li>
            Split regular expressions down into smaller parts
          </li>
          <li>
            Read aloud the steps in your regex and try to be as literal as possible. Ex “‘a’ followed by ‘b’ followed by ‘c’”
          </li>
          <li>
            Don’t assume your regex is matching what you want or think, test each piece as you go.
          </li>
        </ul>
        <div className={styles.buttonDiv}>
          <button
            className={styles.btnSplash}
            onClick={props.switchToGame}>
            Play the Game!
          </button>
        </div>
      </div>
    </div>
  )
}

Splash.propTypes = {
  switchToGame: PropTypes.func.isRequired,
}

function mapStateToProps() {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
