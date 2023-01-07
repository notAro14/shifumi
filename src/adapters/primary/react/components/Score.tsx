import styles from "./Score.module.scss"

export default function Score() {
  const player = 0
  const computer = 0
  const score = `Player ${player} - Computer ${computer}`
  return <p className={styles.score}>{score}</p>
}
