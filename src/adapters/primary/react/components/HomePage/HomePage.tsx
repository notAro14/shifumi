import Card from "src/adapters/primary/react/components/Card"
import GameHistory from "src/adapters/primary/react/components/GameHistory"
import RockPaperScissors from "src/adapters/primary/react/components/RockPaperScissors"
import Score from "src/adapters/primary/react/components/Score"
import Winner from "src/adapters/primary/react/components/Winner"
import styles from "./HomePage.module.scss"

export default function Page() {
  return (
    <Card>
      <div className={styles.flex}>
        <Score />
        <RockPaperScissors />
        <hr />
        <GameHistory />
        <Winner />
      </div>
    </Card>
  )
}
