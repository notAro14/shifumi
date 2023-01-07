import { useAppSelector } from "../hooks/redux"
import { scoreSelector } from "src/adapters/primary/react/view-models/score.selector"
import styles from "./Score.module.scss"

export default function Score() {
  const score = useAppSelector(scoreSelector)
  return <p className={styles.score}>{score}</p>
}
