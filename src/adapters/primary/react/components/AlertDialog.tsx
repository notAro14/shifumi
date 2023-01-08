import { FC } from "react"
import {
  Root,
  Portal,
  Overlay,
  Title,
  Description,
  Cancel,
  Action,
  Content,
} from "@radix-ui/react-alert-dialog"
import styles from "./AlertDialog.module.scss"

export const AlertDialog: FC<{
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  onCancel: () => void
  title: string
  description: string
}> = ({ isOpen, onOpenChange, title, description, onCancel, onConfirm }) => {
  return (
    <Root open={isOpen} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay className={styles.overlay}>
          <Content className={styles.content}>
            {title && (
              <Title asChild className={styles.title}>
                <h2>{title}</h2>
              </Title>
            )}
            {description && (
              <Description asChild className={styles.description}>
                <p>{description}</p>
              </Description>
            )}
            <Action asChild>
              <button onClick={onConfirm}>Supprimer</button>
            </Action>
            <Cancel asChild>
              <button onClick={onCancel}>Annuler</button>
            </Cancel>
          </Content>
        </Overlay>
      </Portal>
    </Root>
  )
}

export default AlertDialog
