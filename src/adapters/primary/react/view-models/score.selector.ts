import type { AppState } from "src/core/store"
import type { ScoreVM } from "./scoreVM"

export const scoreSelector = (state: AppState): ScoreVM => {
  const { player, computer } = state.countScore
  return `Player ${player} - Computer ${computer}`
}
