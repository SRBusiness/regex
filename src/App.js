import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import PuzzleZone from './components/puzzleZone';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <section className='container'>
        <Welcome />
        {/* <div className='left-half'>

          <p> Level Nav Goes Here </p>
          <LessonContainer />
        </div> */}

        {/* <div className='right-half'>
          <PuzzleContainer />
          <Game />
        </div> */}
          <Game />
      </section>
    );
  }
}

export default App;
