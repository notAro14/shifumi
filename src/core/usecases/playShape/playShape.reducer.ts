export interface PlayShapeState {
  player: {
    shape: null
  }
  computer: {
    shape: null
  }
}
const initial: PlayShapeState = {
  player: {
    shape: null,
  },
  computer: {
    shape: null,
  },
}

export function playShapeReducer(state = initial) {
  return state
}
