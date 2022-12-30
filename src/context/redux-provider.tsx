"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"

import { store } from "src/store"

interface Props {
  children: ReactNode
}
export default function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}
