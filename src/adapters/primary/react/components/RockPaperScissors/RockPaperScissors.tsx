import { useAppDispatch } from "src/adapters/primary/react/hooks/redux"
import type { Shape } from "src/core/models/shape"
import { playShape } from "src/core/usecases/playShape"
import styles from "./RockPaperScissors.module.scss"

export default function RockPaperScissors() {
  const dispatch = useAppDispatch()
  const makeOnClick = (shape: Shape) => () => dispatch(playShape(shape))
  return (
    <div className={styles.container}>
      <button onClick={makeOnClick("Rock")}>Rock</button>
      <button onClick={makeOnClick("Paper")}>Paper</button>
      <button onClick={makeOnClick("Scissors")}>Scissors</button>
    </div>
  )
}
