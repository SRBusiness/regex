const initialState = {
  level: 1,
  totalLevels: 3,
  // globalFlag: true,
  // view: '',
}

// reducer for changing levels
export default function rootReducer (state = initialState, action) {
  // console.log(`inside levelsReducer`);
  switch (action.type) {
    case 'INCREMENT_LEVEL' :
      return {
        ...state,
        level: Math.min( state.level + 1, state.totalLevels)
      }
    case 'DECREMENT_LEVEL' :
      return {
        ...state,
        level: Math.max(state.level - 1, 1)
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
