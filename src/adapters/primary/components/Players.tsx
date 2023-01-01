import { useEffect } from "react"
import { useSelector, useDispatch } from "src/store/hooks"
import { playersSelector } from "src/adapters/primary/view-model/playersVM.selector"
import { retrievePlayers } from "src/core-logic/usecases/retrievePlayers"

export default function Players() {
  const players = useSelector(playersSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(retrievePlayers())
  }, [dispatch])

  if (players === null)
    return (
      <div>
        <p role="progressbar">Loading...</p>
      </div>
    )

  return (
    <div>
      {players.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  )
}
