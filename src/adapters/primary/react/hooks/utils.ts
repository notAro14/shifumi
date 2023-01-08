import { useCallback, useState } from "react"

export const useDisclosure = (initialIsOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen ?? false)
  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  return { isOpen, onOpen, onClose, setIsOpen }
}

export default useDisclosure
