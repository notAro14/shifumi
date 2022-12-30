import { useEffect } from "react"

import useEnableOnce from "./use-enable-once"

export const useIsBrowser = () => {
  const [isEnable, enableOnce] = useEnableOnce()
  useEffect(() => {
    enableOnce()
  }, [enableOnce])
  return isEnable
}
