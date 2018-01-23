import initialState from './initialState';

// reducer for changing levels
export default function rootReducer (state = initialState, action) {
  // console.log(`inside levelsReducer`);
  switch (action.type) {
    case 'INCREMENT_LEVEL' :
      return {
        ...state,
        currentLevelIndex: Math.min( state.currentLevelIndex + 1, state.levels.length - 1),
        currentExerciseIndex: 0,
        userRegex: '',
        globalFlag: true,
      }
    case 'DECREMENT_LEVEL' :
      return {
        ...state,
        currentLevelIndex: Math.max(state.currentLevelIndex - 1, 0),
        currentExerciseIndex: 0,
        userRegex: '',
        globalFlag: true,
      }
    case 'INCREMENT_EXERCISE' :
      return {
        ...state,
        currentExerciseIndex: Math.min( state.currentExerciseIndex + 1, state.levels[state.currentLevelIndex].puzzles.length - 1),
        userRegex: '',
        globalFlag: true,
      }
    case 'DECREMENT_EXERCISE' :
      return {
        ...state,
        currentExerciseIndex: Math.max(state.currentExerciseIndex - 1, 0),
        userRegex: '',
        globalFlag: true,
      }
    case 'CHANGE_LEVEL' :
      return {
        ...state,
        currentLevelIndex: (action.level - 1),
        currentExerciseIndex: 0,
        userRegex: '',
        globalFlag: true,
      }
    case 'TOGGLE_GLOBAL_FLAG' :
      return {
        ...state,
        globalFlag: !state.globalFlag,
      }
    case 'PREVIOUS_LEVEL_LAST_EXERCISE' :
      return {
        ...state,
        currentLevelIndex: Math.max(state.currentLevelIndex - 1, 0),
        currentExerciseIndex: (state.levels[state.currentLevelIndex - 1].puzzles.length - 1),
        globalFlag: true,
        userRegex: '',
      }
    case 'UPDATE_USER_REGEX' :
    console.log(action.userRegex);
      return {
        ...state,
        userRegex: action.userRegex,
      }
    default :
      return state
  }
}
