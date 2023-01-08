import type { ReactNode } from "react"

import styles from "./Layout.module.scss"

export default function Layout(props: { children: ReactNode }) {
  const { children } = props
  return <div className={styles.layout}>{children}</div>
}