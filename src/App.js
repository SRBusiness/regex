import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import LessonContainer from './components/lessonContainer';
import PuzzleContainer from './components/puzzleContainer';

class App extends Component {
  render() {
    return (
      <section className='container'>
        <div className='left-half'>
          <Welcome />
          <p> Level Nav Goes Here </p>
          <LessonContainer />
        </div>

        <div className='right-half'>
          <PuzzleContainer />
        </div>
      </section>
    );
  }
}

export default App;
