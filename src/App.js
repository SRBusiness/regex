import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import Game from './components/game/game';
import Splash from './components/splash/splash';
import * as levelsActionCreators from './actions/actionCreators';
// import styles from './App.css';

const App = ({splash}) => {
  return (
    <div>
      {splash
        ? <Splash />
        : <Game />
      }
    </div>
  );
}

Game.propTypes = {
  // level: PropTypes.object.isRequired,

}

function mapStateToProps({ splash }) {
  // console.log('State in Game', state);
  return {
    // level: levels[currentLevelIndex],
    // refSheetContent: refSheetContent,
    // toggleRef: toggleRefSheet,
    // paragraph: paragraph,
    // contentObj: contentObj,
    splash: splash,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(levelsActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
