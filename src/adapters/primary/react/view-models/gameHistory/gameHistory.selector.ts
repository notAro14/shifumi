import { AppState } from "src/core/store"
import type { GameHistoryVM } from "./gameHistoryVM"

export const gameHistorySelector = (state: AppState): GameHistoryVM => {
  const { saveRoundToHistory } = state
  const gameHistoryAsc = saveRoundToHistory.map((g) => {
    const game = `Player (${g.playerShape}) VS Computer (${g.computerShape})`
    return game
  })
  return gameHistoryAsc.reverse()
}
