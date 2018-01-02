import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import LessonContainer from './components/lessonContainer';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <section className='container'>
        <div className='left-half'>
          <Welcome />
          <div className='filler'> Game zone</div>
          <LessonContainer />
        </div>

        <div className='right-half'>
          <div className='filler'> Game zone</div>
        </div>
      </section>
    );
  }
}

export default App;
