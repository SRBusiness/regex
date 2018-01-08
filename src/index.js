import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import levelsReducer from './reducers/levelsReducer';


const store = createStore(levelsReducer);
console.log(store);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
registerServiceWorker();
