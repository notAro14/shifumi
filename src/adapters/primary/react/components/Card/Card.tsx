import { ReactNode } from "react"
import * as styles from "./Card.css"

export default function Card(props: { children: ReactNode }) {
  return <div className={styles.card}>{props.children}</div>
}
