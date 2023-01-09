import { useAppDispatch } from "src/adapters/primary/react/hooks/redux"
import type { Shape } from "src/core/models/shape"
import { playShape } from "src/core/usecases/playShape"
import * as styles from "./RockPaperScissors.css"

export default function RockPaperScissors() {
  const dispatch = useAppDispatch()
  const makeOnClick = (shape: Shape) => () => dispatch(playShape(shape))
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={makeOnClick("Rock")}>
        Rock
      </button>
      <button className={styles.button} onClick={makeOnClick("Paper")}>
        Paper
      </button>
      <button className={styles.button} onClick={makeOnClick("Scissors")}>
        Scissors
      </button>
    </div>
  )
}
