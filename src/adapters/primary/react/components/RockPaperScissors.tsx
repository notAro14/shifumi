import styles from "./RockPaperScissors.module.scss"

export default function RockPaperScissors() {
  return (
    <div className={styles.container}>
      <button>Rock</button>
      <button>Paper</button>
      <button>Scissors</button>
    </div>
  )
}
