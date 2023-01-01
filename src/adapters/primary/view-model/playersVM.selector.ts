import { AppState } from "src/store/appState"

export const playersSelector = (state: AppState) => {
  return state.retrievePlayers
}
