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
  console.log(`inside toggleGlobalFlag`);
  return {
    type: 'TOGGLE_GLOBAL_FLAG',
  }
}

export function incrementExercise() {
  return {
    type: 'INCREMENT_EXERCISE',
  }
}

export function decrementExercise() {
  return {
    type: 'DECREMENT_EXERCISE',
  }
}

export function previousLevelLastExercise() {
  return {
    type: 'PREVIOUS_LEVEL_LAST_EXERCISE',
  }
}

export function updateRegex(userRegex) {
  return {
    type: 'UPDATE_USER_REGEX',
    userRegex,
  }
}

export function toggleRefSheet() {
  return {
    type: 'TOGGLE_REF_SHEET',
  }
}

export function validateUserRegex(result) {
  return {
    type: 'VALIDATE_USER_REGEX',
    result,
  }
}

export function switchToGame() {
  return {
    type: 'SWITCH_TO_GAME',
  }
}
