import { useAppSelector } from "src/adapters/primary/react/hooks/redux"
import { scoreSelector } from "src/adapters/primary/react/view-models/score/score.selector"
import styles from "./Score.module.scss"

export default function Score() {
  const score = useAppSelector(scoreSelector)
  return <p className={styles.score}>{score}</p>
}
