import { useCallback, useEffect } from "react"
import {
  useAppDispatch,
  useAppSelector,
} from "src/adapters/primary/react/hooks/redux"
import { winnerSelector } from "src/adapters/primary/react/view-models/winner/winner.selector"
import { resetGame } from "src/core/usecases/resetGame/actions"
import AlertDialog from "src/adapters/primary/react/components/AlertDialog"
import useDisclosure from "src/adapters/primary/react/hooks/utils"

export default function Winner() {
  const { winner, congratsWord } = useAppSelector(winnerSelector)
  const dispatch = useAppDispatch()
  const { setIsOpen, onClose, isOpen, onOpen } = useDisclosure()
  const onResetGame = useCallback(() => {
    dispatch(resetGame())
    onClose()
  }, [onClose, dispatch])

  useEffect(() => {
    if (winner) onOpen()
  }, [winner, onOpen])

  if (winner === null) return null

  return (
    <AlertDialog
      title={congratsWord ?? ""}
      onOpenChange={setIsOpen}
      confirmBtnLabel="Play again"
      onConfirm={onResetGame}
      isOpen={isOpen}
    />
  )
}
