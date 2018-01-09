// action creators - and action wrapped in a function - must be a pure function

export function incrementLevel() {
  return {
    type: 'INCREMENT_LEVEL',
  }
}

export function decrementLevel() {
  return {
    type: 'DECREMENT_LEVEL',
  }
}

export function changeLevel(level) {
  return {
    type: 'CHANGE_LEVEL',
    level,
  }
}

export function toggleGlobalFlag() {
  return {
    type: 'TOGGLE_GLOBAL_FLAG',
  }
}
