import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import levelsReducer from './reducers/levelsReducer';


const store = createStore(levelsReducer);
// console.log(store);
// console.log(store.getState());

ReactDOM.render(
  // Provider is how we give components access to the store, components need to ask for the store access
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
