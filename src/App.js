import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './App.css';
import Game from './components/game/game';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <section className={styles.blue}>
        <Game />
      </section>
    );
  }
}

export default App;
