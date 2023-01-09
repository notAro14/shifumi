import type { ReactNode } from "react"

import * as styles from "./Layout.css"

export default function Layout(props: { children: ReactNode }) {
  const { children } = props
  return <div className={styles.layout}>{children}</div>
}
