import { ReactNode } from "react"
import styles from "./Card.module.scss"

export default function Card(props: { children: ReactNode }) {
  return <div className={styles.card}>{props.children}</div>
}
