// action creators - and action wrapped in a functional

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
  console.log(`inside changeLevel action creator`);
  return {
    type: 'CHANGE_LEVEL',
    level,
  }
}
