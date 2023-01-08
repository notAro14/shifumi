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
    if (playerScore === computerScore)
      return { winner: "Draw", congratsWord: "It's a tie" }
    if (playerScore > computerScore)
      return { winner: "Player", congratsWord: "You won !" }
    if (playerScore < computerScore)
      return { winner: "Computer", congratsWord: "You lost" }
  }
  return {
    winner: null,
    congratsWord: null,
  }
}
