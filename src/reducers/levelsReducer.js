// import { incrementLevel, decrementLevel, changeLevel } from '../actions/levelsActions';
// TODO: need to make a function that deals with the logic of when it is appropriate to change levels, that shouldnt live in the reducer. Maybe wrap it in the action creator

// initialState variable
const initialState = {
  level: 1,
  totalLevels: 3,
  // userRegex: '',
  // globalFlag: true,
  // view: '',
}


// reducer for changing levels
export default function levelsReducer (state = initialState, action) {
  console.log(`inside levelsReducer`);
  switch (action.type) {
    case 'INCREMENT_LEVEL' :
      return {
        ...state,
        level: state.level + 1,
      }
    case 'DECREMENT_LEVEL' :
      return {
        ...state,
        level: state.level - 1,
      }
    case 'CHANGE_LEVEL' :
      return {
        ...state,
        level: action.level,
      }
    default :
      return state
  }
}
