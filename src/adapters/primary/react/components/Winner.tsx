import { useEffect } from "react"
import {
  useAppDispatch,
  useAppSelector,
} from "src/adapters/primary/react/hooks/redux"
import { winnerSelector } from "src/adapters/primary/react/view-models/winner/winner.selector"
import { resetGame } from "src/core/usecases/resetGame/actions"

export default function Winner() {
  const { winner } = useAppSelector(winnerSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (winner === null) return
    switch (winner) {
      case "Computer":
        confirm("You lost")
        break
      case "Player":
        confirm("Congratulations")
        break
      default:
        confirm("It's a tie")
    }
    dispatch(resetGame())
  }, [winner, dispatch])
  return null
}
