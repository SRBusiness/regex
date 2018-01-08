// action creators - and action wrapped in a functional

export function incrementLevel(nextLevel, totalLevels) {
  console.log(`inside incrementLevel action creator`);
  return {
    type: 'INCREMENT_LEVEL',
  }
}

export function decrementLevel() {
  console.log(`inside decrementLevel action creator`);
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
