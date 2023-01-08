import { AppState } from "src/core/store"
import type { WinnerVM } from "./winnerVM"
const MAX_ROUNDS = 3
export const winnerSelector = (state: AppState): WinnerVM => {
  const {
    countScore: { player: playerScore, computer: computerScore },
    saveRoundToHistory: gameHistory,
  } = state
  const rounds = gameHistory.length
  if (rounds >= MAX_ROUNDS) {
    if (playerScore === computerScore) return { winner: "Draw" }
    if (playerScore > computerScore) return { winner: "Player" }
    if (playerScore < computerScore) return { winner: "Computer" }
  }
  return {
    winner: null,
  }
}
