import { FC, ReactNode } from "react"
import ReduxProvider from "./redux-provider"

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>
}

export default Providers
