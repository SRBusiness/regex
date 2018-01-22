import styles from './reducer.css'
import initialState from './initialState';

// reducer for changing levels
export default function rootReducer (state = initialState, action) {
  // console.log(`inside levelsReducer`);
  switch (action.type) {
    case 'INCREMENT_LEVEL' :
      return {
        ...state,
        currentLevelIndex: Math.min( state.currentLevelIndex + 1, state.levels.length - 1)
      }
    case 'DECREMENT_LEVEL' :
      return {
        ...state,
        currentLevelIndex: Math.max(state.currentLevelIndex - 1, 0)
      }
    case 'CHANGE_LEVEL' :
      return {
        ...state,
        currentLevelIndex: (action.level - 1),
      }
    case 'TOGGLE_GLOBAL_FLAG' :
      return {
        ...state,
        globalFlag: !state.globalFlag,
      }
    default :
      return state
  }
}
