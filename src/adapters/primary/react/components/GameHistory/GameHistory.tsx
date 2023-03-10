import { useAppSelector } from "src/adapters/primary/react/hooks/redux"
import { gameHistorySelector } from "src/adapters/primary/react/view-models/gameHistory/gameHistory.selector"
import * as styles from "./GameHistory.css"

export default function GameHistory() {
  const gameHistory = useAppSelector(gameHistorySelector)

  if (gameHistory.length === 0) return <p role="alert">No round played yet</p>
  return (
    <ul className={styles.gameHistory}>
      {gameHistory.map((h, idx) => (
        <li key={h + idx}>{h}</li>
      ))}
    </ul>
  )
}
