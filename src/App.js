import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from './components/game/game';
import Splash from './components/splash/splash';
import styles from './App.css';

const App = ({splash}) => {
  return (
    <div className={styles.container}>
      {splash
        ? <Splash />
        : <Game />
      }
    </div>
  );
}

App.propTypes = {
  splash: PropTypes.bool.isRequired,
}

function mapStateToProps({ splash }) {
  return {
    splash: splash,
  }
}

export default connect(
  mapStateToProps,
)(App);
