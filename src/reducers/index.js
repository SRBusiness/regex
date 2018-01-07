// takes all of the reducers and create one big onChange

import cart from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cart
});

export default rootReducer;
